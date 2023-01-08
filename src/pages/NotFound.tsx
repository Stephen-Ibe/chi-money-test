import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center chi-container '>
      <h1 className='text-6xl'>404</h1>
      <p className='uppercase'>Page not found</p>
      <Link
        to='/'
        className='px-8 py-2 my-4 font-semibold text-white bg-blue-400 border-none rounded-lg'
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
