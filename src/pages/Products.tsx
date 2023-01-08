import React, { useEffect, useState } from 'react';
import { getAllGiftCards } from '../services/apis/Cards.api';
import { Link } from 'react-router-dom';

type Props = {};

const Products = (props: Props) => {
  const [giftCards, setGiftCards] = useState<Record<string, any>>({});

  const fetchAllGiftCards = async () => {
    try {
      const res = await getAllGiftCards();
      setGiftCards(res.data.giftCardsRLD);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllGiftCards();
  }, []);

  return (
    <div className='chi-container'>
      <div className='py-4 text-center border-b-2'>
        <h1 className='text-xl font-semibold'>
          Shop for the perfect gift card
        </h1>
      </div>
      <nav className='my-8'>
        <ul className='flex items-center justify-center text-sm gap-x-8'>
          <li className='underline'>
            <Link to='#'>View Gift Card Balance</Link>
          </li>
          <li className='underline'>
            <Link to='#'>Reload Your Balance</Link>
          </li>
          <li className='underline'>
            <Link to='#'>Redeem An Amazon Gift Card</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Products;
