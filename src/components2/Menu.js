import React from 'react'
import MenuItem from './MenuItem';
import { menuItemsData } from './data'
import './Menu.css'

const Menu = ({list}) => {
    return (
        <main>
            {list.map((item)=> (
                <MenuItem key ={item.id} item ={item} />
            ))}
        </main>
    )
}

export default Menu;
