import React from 'react';

type Props = {};

const Shop = (props: Props) => (
  <div className='flex gap-10 py-8 border chi-container'>
    <div className='w-8/12 p-8 bg-white cart'>
      <div className='heading'>
        <h1 className='text-3xl'>Shopping Cart</h1>
        <p>
          No items selected. <span>Select all items</span>
        </p>
      </div>
      <div className='products'>
        <div className='grid'>
          <p className='text-sm justify-self-end'>Price</p>
        </div>
        <div className='py-4 products border-y-2'>
          <div className='product_item'>
            <input type='checkbox' name='' id='' />
          </div>
        </div>
        <div className='grid'>
          <p className='text-sm font-semibold justify-self-end'>
            Subtotal(4 items):<span className='font-bold'>$200</span>
          </p>
        </div>
      </div>
    </div>
    <div className='w-3/12 p-8 space-y-2 bg-white cart_items'>
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
