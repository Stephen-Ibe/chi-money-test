import React from 'react';
import Navbar from '../../components/blocks/navbar';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <Navbar />
      <div className='p-8 my-20 chi-container'>
        <section className='flex items-start gap-x-2'>
          <div className='w-4/12 p-6 border-2 img_container'>
            <div className='relative w-[100%] h-[400px]'>
              <img
                src={state.img}
                alt='card_img'
                className='absolute object-cover w-full h-full'
              />
            </div>
          </div>
          <div className='w-8/12 p-6 border-2 card_deatils'>
            <h1 className='text-2xl font-semibold'>{state.productName}</h1>
            <p>Brand:{state?.brand?.brandName}</p>
            <p>Type:{state?.type}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
