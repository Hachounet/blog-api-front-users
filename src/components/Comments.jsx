import { useEffect, useState } from 'react';
import LikeButton from './Like';
import TextArea from './Textarea';
import ButtonElevatedBase from './ButtonElevatedBase';
import PropTypes from 'prop-types';
import { useAuthContext } from '../AuthContext';
import useAuth from '../hooks/authFetch';

export default function Comments({ comments, postId }) {
  const { logged, token, setLogged } = useAuthContext();
  const [respondValues, setRespondValues] = useState({});
  const [newComment, setNewComment] = useState('');
  const [uniqueComments, setUniqueComments] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  console.log(uniqueComments);

  const url = 'https://hachounet-blog-api-backend.adaptable.app/posts/';

  const handlePostComment = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!logged) return;

    const commentType = event.target.dataset.commentType;

    if (commentType === 'new') {
      try {
        const response = await fetch(`${url}${postId}?comment=${newComment}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          localStorage.removeItem('accessToken');
          setLogged(false);
          window.location.href = '/login';
          return;
        }

        if (response.ok) {
          const data = await response.json();
          setUniqueComments((prevComments) => [data.comment, ...prevComments]);
          setNewComment('');
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Failed to post comment');
        }
      } catch (error) {
        setErrorMessage('Error posting comment: ' + error.message);
      }
    } else if (commentType === 'response') {
      const commentId = event.target.dataset.parentId;
      const responseText = respondValues[commentId];

      try {
        const response = await fetch(
          `${url}${postId}?comment=${responseText}&parentComment=${commentId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 401) {
          localStorage.removeItem('accessToken');
          setLogged(false);
          window.location.href = '/login';
          return;
        }

        if (response.ok) {
          const data = await response.json();
          // This function will be modified to ensure correct nesting
          const updateComments = (comments, commentId, newComment) => {
            return comments.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  Children: [...(comment.Children || []), newComment],
                };
              }

              // Recursively check children for the correct parentId
              if (comment.Children && comment.Children.length > 0) {
                return {
                  ...comment,
                  Children: updateComments(
                    comment.Children,
                    commentId,
                    newComment
                  ),
                };
              }
              return comment;
            });
          };

          setUniqueComments(
            (prevComments) =>
              updateComments(prevComments, commentId, data.comment) // Ensure we pass the new comment
          );
          setRespondValues((prev) => ({ ...prev, [commentId]: '' }));
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || 'Failed to post response');
        }
      } catch (error) {
        setErrorMessage('Error posting response: ' + error.message);
      }
    }
  };

  const handleChange = (commentId, event) => {
    setRespondValues({
      ...respondValues,
      [commentId]: event.target.value,
    });
  };

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const getRespondValue = (commentId) => {
    return respondValues[commentId] || '';
  };

  function removeDuplicateComments(comments) {
    const ids = new Set();
    const uniqueComments = [];

    const processComments = (comments) => {
      comments.forEach((comment) => {
        if (!ids.has(comment.id)) {
          ids.add(comment.id);
          if (!comment.parentId) {
            uniqueComments.push(comment);
          }
        }
        if (comment.Children && comment.Children.length > 0) {
          processComments(comment.Children);
        }
      });
    };

    processComments(comments);
    return uniqueComments;
  }

  useEffect(() => {
    const unique = removeDuplicateComments(comments);
    setUniqueComments(unique);
  }, [comments]);

  const renderComments = (comments) => {
    return (
      <ul
        role="feed"
        className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200"
      >
        {comments.map((comment) => (
          <li
            key={comment.id}
            role="article"
            className="relative pl-8"
          >
            <div className="flex flex-col flex-1 gap-4">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
                <span className="flex-1">
                  {comment.author.pseudo}{' '}
                  <span className="text-base font-normal text-slate-500">
                    commented
                  </span>
                </span>
                <span className="text-sm font-normal text-slate-400">
                  {' '}
                  {new Date(comment.createdAt).toLocaleTimeString()}
                </span>
              </h4>
              <p className="text-slate-500">{comment.content}</p>
              <LikeButton
                commentId={comment.id}
                postId={postId}
                numbLikes={comment._count.Like}
                hasLiked={comment.userHasLiked}
              />
              {logged ? (
                <form
                  data-comment-type="response"
                  data-parent-id={comment.id}
                  onSubmit={handlePostComment}
                  className="flex flex-col gap-2"
                >
                  <TextArea
                    value={getRespondValue(comment.id)}
                    onChange={(event) => handleChange(comment.id, event)}
                  />
                  {getRespondValue(comment.id) !== '' && (
                    <ButtonElevatedBase
                      text="Respond"
                      className1="mx-auto"
                    />
                  )}
                </form>
              ) : (
                'You must be logged in to like or respond.'
              )}
            </div>

            {comment.Children && comment.Children.length > 0 && (
              <div className="pl-8">{renderComments(comment.Children)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {logged ? (
        <form
          data-comment-type="new"
          onSubmit={handlePostComment}
          className="flex flex-col gap-2"
        >
          <TextArea
            value={newComment}
            onChange={handleNewCommentChange}
          />
          {newComment !== '' && (
            <ButtonElevatedBase
              text="Post Comment"
              className1="mx-auto"
            />
          )}
        </form>
      ) : (
        'You must be logged in to like or comment.'
      )}
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
      {renderComments(uniqueComments)}
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.string,
};
