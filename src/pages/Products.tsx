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
    <>
      <nav className='border-4'>navabr</nav>
      <div className='chi-container'>
        <div className='py-8 text-center border-b-2'>
          <h1 className='text-3xl font-semibold'>
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
        <section className='p-8 my-16 products'>
          <div className='grid gap-8 gap-y-24 gid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
            {giftCards?.content?.length > 0 ? (
              giftCards?.content?.map((giftCard: any) => (
                <div className='' key={giftCard.productId}>
                  <div className='relative w-full h-[200px]'>
                    <img
                      src={giftCard.img}
                      alt='giftCard_image'
                      className='absolute object-cover w-full h-full'
                    />
                  </div>
                  <div className='my-4'>
                    <h4 className='text-lg font-semibold'>
                      {giftCard.productName}
                    </h4>
                    <p className='mt-2 text-sm'>{giftCard.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-center'>No Gift Cards Founds</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
