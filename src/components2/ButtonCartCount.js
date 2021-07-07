import { useHistory } from 'react-router';
import './cart.css'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../cart/cart.selector'


const ButtonCartCount = ({ Cart }) => {
  const history = useHistory();
  return (
    <div className='btn' onClick={() => history.push('/cart')}>
      <div className='count'>{Cart >= 10 ? '20+' : Cart}</div>
     
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  carts: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);
