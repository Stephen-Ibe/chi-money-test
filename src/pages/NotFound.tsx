import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <div className='notFound chi-container'>
      <h1 className='text-6xl'>404</h1>
      <p className='uppercase'>Page not found</p>
      <Link to='/' className='btn btn-blue'>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
