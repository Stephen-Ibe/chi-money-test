import React, { useEffect, useState } from 'react';
import { getAllGiftCards } from '../../services/apis/Cards.api';
import { Link } from 'react-router-dom';
import GiftCard from '../../components/blocks/card';

type Props = {};

const productNav = [
  { id: 0, title: 'View Gift Card Balance' },
  { id: 1, title: 'Reload Your Balance' },
  { id: 2, title: 'Redeem An Amazon Gift Card' },
];

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

    return () => {
      setGiftCards({});
    };
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
            {productNav?.map(({ id, title }: { id: number; title: string }) => (
              <li className='underline' key={id}>
                <Link to='#'>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <section className='p-8 my-16 products'>
          <div className='grid gap-8 gap-y-24 gid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
            {giftCards?.content?.length > 0 ? (
              giftCards?.content?.map((giftCard: any) => (
                <GiftCard key={giftCard.productId} giftCard={giftCard} />
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
