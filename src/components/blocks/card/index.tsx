import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  giftCard: { [key: string]: any };
};

const GiftCard = ({ giftCard }: Props) => {
  return (
    <section>
      <div className='giftCard'>
        <img
          src={giftCard.img}
          alt='giftCard_image'
          className='absolute object-cover w-full h-full'
          loading='lazy'
        />
      </div>
      <div className='my-4'>
        <h4 className='text-lg font-semibold'>{giftCard.productName}</h4>
        <p className='mt-2 text-sm'>{giftCard.description}</p>
      </div>
      <div>
        <Link to={`/products/${giftCard.productId}`} className='detail_link'>
          View Detail
        </Link>
      </div>
    </section>
  );
};

export default GiftCard;
