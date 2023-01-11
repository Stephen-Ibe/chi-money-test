import React from 'react';
import { Link } from 'react-router-dom';
import ChiButton from '../../common/button';
import { GenericType } from '../../../types';

type Props = {
  giftCard: { [key: string]: any };
  addToCart: (data: GenericType) => void;
};

const GiftCard = ({ giftCard, addToCart }: Props) => {
  return (
    <section>
      <div className='giftCard'>
        <img src={giftCard.img} alt='giftCard_image' loading='lazy' />
      </div>
      <div className='giftCard_content'>
        <h4>{giftCard.productName}</h4>
        <p>{giftCard.description}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Link
          to={`/products/${giftCard.productId}`}
          className='detail_link'
          state={{ ...giftCard }}
        >
          View Detail
        </Link>
        <ChiButton
          title='Add To Cart'
          className='px-4 py-2 text-xs font-semibold bg-yellow-400 rounded'
          onClick={() => addToCart(giftCard)}
        />
      </div>
    </section>
  );
};

export default GiftCard;
