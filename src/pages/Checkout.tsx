import React from 'react';

const OrderSummary = ({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) => (
  <div className='flex items-center justify-between my-1 text-sm'>
    <p>{name}</p>
    <p>{value}</p>
  </div>
);

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className='border chi-container'>
      <div className='py-4 text-center heading'>
        <h1 className='text-3xl'>Checkout (4 items)</h1>
      </div>
      <div className='flex gap-x-6'>
        <div className='w-10/12'>hello</div>
        <div className='w-3/12 p-6 border rounded-lg border-slate-400'>
          <div className='space-y-2 text-center'>
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
          <div className='pt-4 my-4 border-gray-300 border-y-2'>
            <h4 className='text-lg font-semibold'>Order Summary</h4>
            <div className='my-2 space-y-2'>
              <div>
                <OrderSummary name='Items(4):' value='$200' />
                <OrderSummary name='Shipping & handling:' value='--' />
              </div>
              <hr className='w-10 ml-auto border-2 bg-slate-400' />
              <div>
                <OrderSummary name='Total before tax:' value='--' />
                <OrderSummary
                  name='Estimated tax to be collected:*	'
                  value='--'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <h4 className='text-[#b12704] text-xl font-semibold'>
              Order total
            </h4>
            <p>--</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
