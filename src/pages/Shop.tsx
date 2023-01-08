import React from 'react';

type Props = {};

const Shop = (props: Props) => (
  <div className='container flex gap-10 py-8 mx-auto border'>
    <div className='w-8/12 p-8 bg-white cart'>
      <div className='heading'>
        <h1 className='text-3xl'>Shopping Cart</h1>
        <p>
          No items selected. <span>Select all items</span>
        </p>
      </div>
      <div className='products'>
        <div className='grid border-b-2'>
          <p className='text-sm justify-self-end'>Price</p>
        </div>
      </div>
    </div>
    <div className='w-2/12 p-8 space-y-2 bg-white cart_items'>
      <p className='font-semibold'>No items selected</p>
      <button
        type='submit'
        className='w-full py-2 text-sm bg-yellow-400 rounded-lg'
      >
        Proceed to checkout
      </button>
    </div>
  </div>
);

export default Shop;
