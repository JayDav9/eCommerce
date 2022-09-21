import React from 'react';
import {IoShirtOutline} from 'react-icons/io5';
import { useContext } from 'react';
import CartContext from './CartContext';


export default function Card({name, price})
{
    const {addToCart} = useContext(CartContext);
        return(
            <div onClick = {()=> addToCart(name,price)}>
                
                <h1>{name} <IoShirtOutline /></h1>
                <h2>{price}</h2>
                
            </div>

        )
}