import React, { useEffect, useState } from 'react';
import { getAllGiftCards } from '../../services/apis/Cards.api';
import { Link } from 'react-router-dom';
import GiftCard from '../../components/blocks/card';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

type Props = {};

const productNav = [
  { id: 0, title: 'View Gift Card Balance' },
  { id: 1, title: 'Reload Your Balance' },
  { id: 2, title: 'Redeem An Amazon Gift Card' },
];

const Products = (props: Props) => {
  const [giftCards, setGiftCards] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAllGiftCards = async () => {
    setLoading(true);
    try {
      const res = await getAllGiftCards();
      setGiftCards(res.data.giftCardsRLD);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
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
            {loading ? (
              Array.from(new Array(12)).map(() => (
                <>
                  <Box sx={{ rowGap: 1 }}>
                    <Skeleton
                      animation='wave'
                      variant='rectangular'
                      height={200}
                    />
                    <Skeleton
                      width='60%'
                      variant='text'
                      style={{ marginTop: '8px' }}
                    />
                    <Skeleton />
                    <Skeleton
                      width='20%'
                      variant='text'
                      style={{ marginTop: '1rem' }}
                    />
                  </Box>
                </>
              ))
            ) : giftCards?.content?.length > 0 ? (
              giftCards?.content?.map((giftCard: any) => (
                <GiftCard key={giftCard.productId} giftCard={giftCard} />
              ))
            ) : (
              <p className='text-center'>No Gift Cards Founds</p>
            )}
            {/* {giftCards?.content?.length > 0 ? (
              giftCards?.content?.map((giftCard: any) => (
                <GiftCard key={giftCard.productId} giftCard={giftCard} />
              ))
            ) : (
              <p className='text-center'>No Gift Cards Founds</p>
            )} */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
