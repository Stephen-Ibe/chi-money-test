import React, { FC } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

type Props = { cartSize?: number };

const Navbar: FC<Props> = ({ cartSize = 0 }) => {
  return (
    <nav className='navbar'>
      <div className='chi-container'>
        <div className='logo'>
          <h4 className='text-2xl'>Chi-Shop</h4>
        </div>
        <div className='cart'>
          <Link to='/cart'>
            <ShoppingCartOutlinedIcon />
            <span className=''>{cartSize}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
