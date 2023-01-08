import axios from '../axios';

export const getAllGiftCards = async () => {
  try {
    const url = '/info/assets';
    const res = await axios.get(url);

    return res.data;
  } catch (err) {
    throw err;
  }
};
