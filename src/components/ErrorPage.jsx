import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, I think you are lost ! </h1>
      <Link to="/">You can go back to the homepage right here !</Link>
    </div>
  );
};

export default ErrorPage;
