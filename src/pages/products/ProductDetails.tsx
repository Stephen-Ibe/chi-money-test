import React from 'react';
import Navbar from '../../components/blocks/navbar';
import { useLocation } from 'react-router-dom';
import formatNumber from '../../utils/formatNumber';
import ChiButton from '../../components/common/button';

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <Navbar />
      <div className='p-8 my-20 chi-container'>
        <section className='flex items-start gap-x-2'>
          <div className='w-4/12 p-6 img_container'>
            <div className='relative w-[100%] h-[400px]'>
              <img
                src={state.img}
                alt='card_img'
                className='absolute object-cover w-full h-full'
              />
            </div>
          </div>
          <div className='w-8/12 p-6 card_details'>
            <h1 className='text-2xl font-semibold'>{state.productName}</h1>
            <p>Brand: {state?.brand?.brandName}</p>
            <p>Type: {state?.type}</p>
            <div>
              <p className='flex'>
                Price:
                <span className='text-base font-semibold text-red-800'>
                  ${formatNumber(state?.senderFee * 100)}
                </span>
              </p>
              <p>Gift Amount ($50 - $2000)</p>
              <div className='my-2 space-x-2'>
                <ChiButton
                  title='$25'
                  className='px-4 py-1 text-sm font-semibold border border-black rounded btn'
                />
                <ChiButton
                  title='$50'
                  className='px-4 py-1 text-sm font-semibold border border-black rounded btn'
                />
                <ChiButton
                  title='$100'
                  className='px-4 py-1 text-sm font-semibold border border-black rounded btn'
                />
                <ChiButton
                  title='$150'
                  className='px-4 py-1 text-sm font-semibold border border-black rounded btn'
                />
                <ChiButton
                  title='$500'
                  className='px-4 py-1 text-sm font-semibold border border-black rounded btn'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
