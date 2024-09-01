import { useState } from 'react';
import { useAuthContext } from '../AuthContext';
import PropTypes from 'prop-types';

const LikeButton = ({ commentId, postId, numbLikes, hasLiked }) => {
  const [likes, setLikes] = useState(numbLikes);
  const [isLiked, setIsLiked] = useState(hasLiked);
  const { logged, token } = useAuthContext();

  const url = 'https://hachounet-blog-api-backend.adaptable.app/posts/';

  const handleLike = async (event) => {
    event.preventDefault();

    if (!logged) return;

    try {
      const response = await fetch(
        `${url}${postId}?like=true&commentId=${commentId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        if (isLiked) {
          setLikes(likes - 1);
        } else {
          setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
      } else if (response.status === 401) {
        window.location.href = '/login';
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return;
    }
  };

  if (logged)
    return (
      <div>
        <form onSubmit={handleLike}>
          <button type="submit">{isLiked ? '❤️' : '🤍'}</button>
          <span>
            {likes} {likes === 1 ? 'like' : 'likes'}
          </span>
        </form>
      </div>
    );
  else return null;
};

export default LikeButton;

LikeButton.propTypes = {
  commentId: PropTypes.string,
  postId: PropTypes.string,
  numbLikes: PropTypes.number,
  hasLiked: PropTypes.bool,
};
