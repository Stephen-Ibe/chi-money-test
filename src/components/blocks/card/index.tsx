import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import ChiButton from '../../common/button';
import { GenericType } from '../../../types';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type Props = {
  giftCard: { [key: string]: any };
  addToCart: (data: GenericType) => void;
};

const GiftCard = ({ giftCard, addToCart }: Props) => {
  const [addProduct, setAddProduct] = useState<boolean>(false);
  const [quantity, setQuantity] = React.useState('');
  const [productExists, setProductExists] = useState<any>({});

  const checkIfProductExists = () => {
    const cartList = store.get('cart');
    if (cartList.length <= 0) {
      setProductExists({});
    } else {
      const exists = cartList.filter(
        (item: any) => item.id === giftCard.productId
      );
      setProductExists(exists[0]);
    }
  };

  const addProductToCart = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setQuantity(value);
    setAddProduct(!addProduct);
    addToCart({ id: giftCard.productId, quantity: value });

    return checkIfProductExists();
  };
  useEffect(() => {
    checkIfProductExists();
  }, []);

  return (
    <section className='giftCard'>
      <div className='giftCard_image'>
        <img src={giftCard.img} alt='giftCard_image' loading='lazy' />
      </div>
      <div className='giftCard_content'>
        <h4>{giftCard.productName}</h4>
        <p>{giftCard.description}</p>
      </div>
      <div className='giftCard_actions'>
        <Link
          to={`/products/${giftCard.productId}`}
          className='detail_link'
          state={{ ...giftCard }}
        >
          View Detail
        </Link>
        {productExists?.id === giftCard.productId ? (
          <p>In Cart</p>
        ) : addProduct ? (
          <div className='w-4/12'>
            <FormControl fullWidth size='small'>
              <Select
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                value={quantity}
                onChange={addProductToCart}
              >
                <MenuItem disabled value=''>
                  <em>Qty</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </div>
        ) : (
          <ChiButton
            title='Add To Cart'
            className='px-4 py-2 text-xs font-semibold bg-yellow-400 rounded'
            onClick={() => setAddProduct(!addProduct)}
          />
        )}
      </div>
    </section>
  );
};

export default GiftCard;
