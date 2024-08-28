import useFetch from '../hooks/fetchPosts';
import PropTypes from 'prop-types';

const About = ({ url }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="text-xl flex justify-center items-center flex-grow mb-[193.25px]">
      {data.aboutPage.content} THIS IS LOGOUT PAGE WIP
    </div>
  );
};

export default About;

About.propTypes = {
  url: PropTypes.string.isRequired, // Utilisation de PropTypes pour valider les props
};
