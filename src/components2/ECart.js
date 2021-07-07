import React from 'react';
import { useHistory } from 'react-router';
import './empty.css';

const Empty = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <p>The Cart is empty</p>
      <button onClick={() => history.push('./')}>Log Out</button>
    </div>
  );
};

export default Empty;
