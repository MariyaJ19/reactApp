import React from 'react'
import './btnAR.css'
import {icons} from 'react-icons'


const Btn = ({ quantity, handleAddItem, handleRemoveItem}) => {
  return (
    <div className='btn'>
      {quantity !== 0 ? (
        <div className='btnAdd'>
          <i
            class ='BsPlusSquare'
            aria-hidden='true'
            
            onClick={handleRemoveItem}
          ></i>
          <span> {quantity}</span>
          <i class='fa fa-plus' aria-hidden='true' onClick={handleAddItem}></i>
        </div>
      ) : (
        <div onClick={handleAddItem} className='btnDelete'>
          <span>+ CART</span>
          <i class='fa fa-plus' aria-hidden='true'></i>
        </div>
      )}
    </div>
  );
};

export default Btn;





