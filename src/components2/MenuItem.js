import React from 'react'
import Btn from './Btn'
import './MenuItem.css'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../cart/cart.action'
import {
  selectCartItems,
  selectCartItemsCount,
} from '../cart/cart.selector'


const MenuItem = ({
  
  item,
  cart,
  cList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, name, price, info, img} = item;

  const handleQuantity = () => {
    let quantity = 0;
    if (cart !== 0) {
      const foundItemInCart = cList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
  
    <div className='item'>
      <img src={img} alt='food' />
      <div className='item-desc'>
        <p className='item_name'>{name}</p>
        <p className='item-info'>
          <small>{info}</small>
        </p>
      </div>
      <div className='item-f'>
        <span className='price'>£{price}</span>
        <Btn
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
    </div>
    
  );
};

const mapStateToProps = createStructuredSelector({
  cart: selectCartItemsCount,
  cList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);

