import { Link, Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';

const HomePage = () => {
  //  throw new Error('An error occurred');

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      <Link to="/users">User</Link>
    </>
  );
};

export default HomePage;
