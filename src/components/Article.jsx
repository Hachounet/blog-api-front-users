import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Comments from './Comments';
import DOMPurify from 'dompurify';

import useOptionalAuth from '../hooks/optionalAuthFetch';
import { useEffect, useState } from 'react';

export default function Article({ url }) {
  const { postId } = useParams();
  const concatUrl = `${url}${postId}`;
  const [htmlContent, setHtmlContent] = useState('');
  const { data, loading, error } = useOptionalAuth(concatUrl); // optionalAuth to avoid redirecting

  useEffect(() => {
    if (data) {
      const newHtmlContent = DOMPurify.sanitize(data.Content);
      setHtmlContent(newHtmlContent);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-xl flex justify-center items-center h-full">
        Error: An error occurred. {error.message}
      </div>
    );

  return (
    <>
      <div className="pb-[50px] flex flex-col items-center">
        {' '}
        <div className="text-xl flex items-center flex-grow flex-col min-h-44 max-w-[70vw]">
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

          <span dangerouslySetInnerHTML={{ __html: htmlContent }}></span>
          <span className="pr-8 pl-8 text-center leading-8"></span>
        </div>
        <div className="flex justify-center mx-auto flex-col  overflow-y-auto max-w-[50vw] pt-8 pb-[200px]">
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
