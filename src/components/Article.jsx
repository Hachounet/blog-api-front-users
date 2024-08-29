import { useParams } from 'react-router-dom';
import useFetch from '../hooks/fetchPosts';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { enGB } from 'date-fns/locale';

export default function Article({ url }) {
  const { postId } = useParams();
  const concatUrl = `${url}${postId}`;

  const { data, loading, error } = useFetch(concatUrl);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-xl flex justify-center items-center h-full">
        Error: An error occurred. {error.message}
      </div>
    );

  return (
    <>
      <div className="text-xl flex items-center flex-grow mb-[193.25px] flex-col">
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
    </>
  );
}

Article.propTypes = {
  url: PropTypes.string.isRequired,
};
