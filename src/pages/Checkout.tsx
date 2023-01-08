import React from 'react';

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className='border chi-container'>
      <div className='py-4 text-center heading'>
        <h1 className='text-3xl'>Checkout (4 items)</h1>
      </div>
      <div className='flex gap-x-6'>
        <div className='w-10/12 border'>hello</div>
        <div className='w-3/12 p-6 text-center border-2 rounded-lg'>
          <div className='space-y-2'>
            <button
              type='button'
              className='bg-[#fffae0] text-center w-full text-slate-500 text-xs py-3 rounded-lg shadow-lg font-semibold'
              disabled
            >
              Use this payment method
            </button>
            <p className='text-sm'>
              Choose a payment method to continue checking out. You'll still
              have a chance to review and edit your order before it's final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
