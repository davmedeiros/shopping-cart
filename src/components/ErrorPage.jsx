import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>404 - Oops! You broke the space-time continuum.</h1>
      <Link to="/">No worries, you can click here to go back to reality.</Link>
    </div>
  );
};

export default ErrorPage;
