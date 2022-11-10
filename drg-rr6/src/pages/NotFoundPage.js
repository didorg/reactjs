import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className='section'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to={'/'} className='btn'>
        Back to Home
      </Link>
    </section>
  );
};
export default NotFoundPage;
