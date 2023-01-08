import React, { useEffect } from 'react';
import { getAllGiftCards } from '../services/apis/Cards.api';

type Props = {};

const Products = (props: Props) => {
  const fetchAllGiftCards = async () => {
    try {
      const res = await getAllGiftCards();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllGiftCards();
  }, []);

  return <div>Products</div>;
};

export default Products;
