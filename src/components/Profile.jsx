import PropTypes from 'prop-types';
import useAuth from '../hooks/authFetch';

export default function Profile({ url }) {
  const { data, loading, error } = useAuth(url);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-xl flex justify-center items-center h-full">
        Error: An error occured. {error.message}
      </div>
    );

  return (
    <div className="text-xl flex flex-col justify-center items-center flex-grow mb-[193.25px] text-center">
      <span>
        This page serve no real purpose. <br /> It could be improved to edit
        your personal data, change your password etc. but this is not project
        purpose.
      </span>
      <br />
      <span>Your user informations : </span>
      <br />
      Email: {data.user.email}
      <br />
      Pseudo: {data.user.pseudo}
    </div>
  );
}

Profile.propTypes = {
  url: PropTypes.string.isRequired,
};
