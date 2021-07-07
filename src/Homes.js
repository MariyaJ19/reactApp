import React from 'react'
import Home from './components/Home'
import Home2 from './components2/Home'
import Home3 from './components copy/Home3'
import { useHistory } from 'react-router';

const Homes = () => {
    const history = useHistory();
    return (
        <div>
           
             <Home />
             <Home2 />
             <Home3 />
         
             <div className='Button'>
    
               <button onClick={() => history.push('./Cart')}>View Cart</button>
    </div>
             
        </div>
    )
}

export default Homes
