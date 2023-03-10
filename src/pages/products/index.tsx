import React, { useCallback, useEffect, useId, useState } from 'react';
import store from 'store';
import { getAllGiftCards } from '../../services/apis/Cards.api';
import { Link } from 'react-router-dom';
import GiftCard from '../../components/blocks/card';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Navbar from '../../components/blocks/navbar';
import { GenericType } from '../../types';
import { Alert } from '@mui/material';
import { toast } from 'react-toastify';

type Props = {};

const productNav = [
  { id: 0, title: 'View Gift Card Balance' },
  { id: 1, title: 'Reload Your Balance' },
  { id: 2, title: 'Redeem An Amazon Gift Card' },
];

const Products = (props: Props) => {
  const uId = useId();
  const [giftCards, setGiftCards] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [catI, setCatI] = useState(0);

  const handleCart = () => {
    const cart = store.get('cart');

    if (cart === undefined) {
      setCatI(0);
      store.set('cart', []);

      return;
    }

    return setCatI(cart.length);
  };

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

  const uc = useCallback(() => {
    const x = store.get('cart').length;
    setCatI(x);
  }, []);

  const addToCart = (data: GenericType) => {
    const cartList = store.get('cart');
    store.set('cart', [...cartList, data]);

    uc();
    return toast.success('Item Added to Cart');
  };

  useEffect(() => {
    handleCart();
    fetchAllGiftCards();

    return () => {
      setGiftCards({});
    };
  }, []);

  return (
    <>
      <Alert severity='success'>This is a success alert — check it out!</Alert>

      <div className='flex flex-col'>
        <Navbar cartSize={catI} />
        <div className='relative mt-20 chi-container'>
          <div className='py-8 text-center border-b-2'>
            <h1 className='text-3xl font-semibold'>
              Shop for the perfect gift card
            </h1>
          </div>
          <nav className='my-8'>
            <ul className='shop_links'>
              {productNav?.map(
                ({ id, title }: { id: number; title: string }) => (
                  <li className='underline' key={id}>
                    <Link to='#'>{title}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <section className='p-8 my-16'>
            <div className='products'>
              {loading ? (
                Array.from(new Array(12)).map((_, idx) => (
                  <div key={`${uId}_${idx}`}>
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
                        width='25%'
                        variant='text'
                        style={{ marginTop: '1rem' }}
                      />
                    </Box>
                  </div>
                ))
              ) : giftCards?.content?.length > 0 ? (
                giftCards?.content?.map((giftCard: any) => (
                  <GiftCard
                    key={giftCard.productId}
                    giftCard={giftCard}
                    addToCart={addToCart}
                  />
                ))
              ) : (
                <p className='text-center'>No Gift Cards Founds</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
