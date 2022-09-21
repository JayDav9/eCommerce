import React from 'react';
import { useContext } from 'react';
import CartContext from './CartContext';
import Card from './Card';

export default function Checkout(){

    const {items} = useContext(CartContext);
    return (
        <div>
            <h1> CHECKOUT </h1>
            {items.map((i) => (
                <Card name={i.name} price={i.price}></Card>
            ))}

        </div>
    )
}