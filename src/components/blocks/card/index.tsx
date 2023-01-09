import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  giftCard: { [key: string]: any };
};

const GiftCard = ({ giftCard }: Props) => {
  return (
    <section>
      <div className='giftCard'>
        <img src={giftCard.img} alt='giftCard_image' loading='lazy' />
      </div>
      <div className='giftCard_content'>
        <h4>{giftCard.productName}</h4>
        <p>{giftCard.description}</p>
      </div>
      <div>
        <Link
          to={`/products/${giftCard.productId}`}
          className='detail_link'
          state={{ ...giftCard }}
        >
          View Detail
        </Link>
      </div>
    </section>
  );
};

export default GiftCard;
