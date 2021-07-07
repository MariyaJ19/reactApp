import { useHistory } from 'react-router';
import './cart.css'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../cart/cart.selector'


const ButtonCartCount = ({ carts }) => {
  const history = useHistory();
  return (
    <div className='btnCartCount' onClick={() => history.push('/cart')}>
      <div className='count'>{carts >= 100 ? '99+' : carts}</div>
     
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  carts: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
