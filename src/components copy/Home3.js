import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Menu from './Menu'
import Btn from './Btn'
import { menuItemsData } from './data'


const Home3 = () => {
  
    return (
        <div>
            <br>
            </br>
            <h1>East Park deli </h1>
            <Menu list={menuItemsData} />
            <Btn />
        
        </div>
    )
}

export default Home3
