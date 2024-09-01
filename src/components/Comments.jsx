import { useEffect, useState } from 'react';
import LikeButton from './Like';
import PropTypes from 'prop-types';

export default function Comments({ comments, postId }) {
  // Save comments
  const [uniqueComments, setUniqueComments] = useState([]);
  // Function to remove duplicate comments with potential nested child comments
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
              <a
                href="#"
                className="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white"
              >
                <img
                  src={`https://i.pravatar.cc/48?img=${Math.floor(Math.random() * 70)}`}
                  alt={comment.author.pseudo}
                  title={comment.author.pseudo}
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
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
              ></LikeButton>
            </div>

            {comment.Children && comment.Children.length > 0 && (
              <div className="pl-8">{renderComments(comment.Children)}</div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <>{renderComments(uniqueComments)}</>; // Rendu des commentaires uniques
}

Comments.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.string,
};
