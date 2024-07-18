import React, { Fragment } from 'react';
import { shoplist } from '../../../helpers/map';
import '../../../assets/css/shop.css';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';



const ShopList = () => {
  return (
    <Fragment>
      <Container>
      <div className='shop'>
        {shoplist?.map((item, index) => (
          <div key={index}>
            <Link to={`/shopcart/${item.id}`}>
            <img src={item.image} alt={item.title} className='shop-img' />
            </Link>
            <h1>{item.title}</h1>
            <Button variant='contained' color='error'>₹{item.Amount}.00</Button>
          </div>
        ))}
      </div>
      </Container>
    </Fragment>
  );
}
export default ShopList;
