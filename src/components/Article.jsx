import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Comments from './Comments';

import useOptionalAuth from '../hooks/optionalAuthFetch';

export default function Article({ url }) {
  const { postId } = useParams();
  const concatUrl = `${url}${postId}`;

  const { data, loading, error } = useOptionalAuth(concatUrl); // optionalAuth to avoid redirecting
  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-xl flex justify-center items-center h-full">
        Error: An error occurred. {error.message}
      </div>
    );

  return (
    <>
      <div className="">
        {' '}
        <div className="text-xl flex items-center flex-grow flex-col">
          <div className="flex text-sm">
            {' '}
            <span>
              Published :{' '}
              {formatDistanceToNow(new Date(data.createdAt), {
                addSuffix: true,
                locale: enGB,
              })}{' '}
              by {data.author.pseudo}
            </span>{' '}
          </div>
          <h1 className="text-4xl pb-4">{data.title}</h1>

          <span>{data.Content}</span>
        </div>
        <div className="flex justify-center">
          <Comments
            comments={data.comments}
            postId={data.id}
          />
        </div>
      </div>
    </>
  );
}

Article.propTypes = {
  url: PropTypes.string.isRequired,
};
