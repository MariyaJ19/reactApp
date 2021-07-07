import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Empty from './ECart'
import Menu from './Menu'
import './style.css'
import {
    selectCartItems,
    selectCartItemsCount,
    selectCartTotal,
  } from '../cart/cart.selector'
  import { useHistory } from 'react-router';


  const Cart = ({ cart, Clist, cartTotal }) => {
    const history = useHistory();
    return (
      <>
        <div className='cart-header'>
       
        </div>
        {cart === 0 ? (
          <Empty />
        ) : (
          <div className='orders'>
            <h1 className='orders-heading'>Your Orders</h1>
            <div className='orders-menu'>
              <Menu list={Clist} />
            </div>
            <h3 className='orders-total'>Your Total £{cartTotal}</h3>
            <div className='emptyCart'>
               <p>Change your Mind?</p>
               <button onClick={() => history.push('./Homes')}>Return to Menu</button>
    </div>
          </div>
        )}
       
       
      </>
    );
  };
  
  const mapStateToProps = createStructuredSelector({
    cart: selectCartItemsCount,
    Clist: selectCartItems,
    cartTotal: selectCartTotal,
  });
  
  export default connect(mapStateToProps)(Cart);
  
