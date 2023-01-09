import React from 'react';
import Dummy from '../assets/images/dummy.jpg';
import { Link } from 'react-router-dom';
import ChiButton from '../components/common/button';

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
          <div className='flex justify-between product_item'>
            <div className='flex'>
              <div className='flex items-center'>
                <input type='checkbox' name='' id='' />
                <div>
                  <img src={Dummy} alt='product' width={180} height={180} />
                </div>
              </div>
              <div>
                <h4 className='font-semibold'>
                  Amazon Gift Card - Print - Gift Card - Thanks So Much
                </h4>
                <p>In Stock</p>
                <p>Sold by REMO TECH US and fulfilled by Amazon CA.</p>
                <div>
                  <input type='checkbox' name='' id='' />
                  This will be a gift <Link to='#'>Learn more</Link>
                </div>
                <div>s</div>
              </div>
            </div>

            <div className='product_price'>$50.00</div>
          </div>
        </div>
        <div className='grid pt-4'>
          <p className='text-sm font-semibold justify-self-end'>
            Subtotal(4 items):<span className='font-bold'>$200</span>
          </p>
        </div>
      </div>
    </div>
    <div className='w-3/12 space-y-6 cart_items'>
      <div className='p-8 space-y-2 bg-white'>
        <p className='font-semibold'>No items selected</p>
        <ChiButton
          title='Proceed to Checkout'
          className='w-full py-2 text-sm bg-yellow-400 rounded-lg'
          type='submit'
        />
      </div>
      <div className='p-6 bg-white'>
        <h2 className='font-semibold'>
          Highly rated skincare products from brands you might like
        </h2>
        <div className='my-4'>
          <div className='product_item'>Product</div>
        </div>
      </div>
    </div>
  </div>
);

export default Shop;
