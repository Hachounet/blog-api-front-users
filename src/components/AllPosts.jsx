import { formatDistanceToNow } from 'date-fns';
import useFetch from '../hooks/fetchPosts';

import { fr } from 'date-fns/locale';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AllPosts({ url }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-xl flex justify-center items-center h-full">
        Error: An error occured. {error.message}
      </div>
    );

  return (
    <div>
      {/*<!-- Component: Two columns even layout --> */}
      <section className="text-xl pt-10 pb-10">
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 justify-items-evenly">
            {data.map((item) => (
              <div
                className="col-span-4 lg:col-span-6 flex-col flex border-gray-100 border p-8"
                key={item.id}
              >
                <span className="text-center">
                  <Link to={`/posts/${item.id}`}>
                    <span>{item.title}</span>
                  </Link>
                </span>
                <span className="text-center text-sm">
                  Author: {item.author.pseudo}
                </span>
                <span className="text-center text-sm">
                  Comments: {item._count.Comment}
                </span>
                <span className="text-center text-sm">
                  {formatDistanceToNow(new Date(item.createdAt), {
                    addSuffix: true,
                    locale: fr,
                  })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </div>
  );
}

AllPosts.propTypes = {
  url: PropTypes.string.isRequired, // Utilisation de PropTypes pour valider les props
};
