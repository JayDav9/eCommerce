import React from 'react';
import Card from './Card';


export default function Products(){
   

    const products = [
        {name: 'vest', price :50},
        {name: 'jacket', price :100},
        {name: 'shirt', price : 20} 
    ];




    return (
       
        <div>
             {products.map(
            p=> (
                
          <Card name = {p.name} price = {p.price} />
            ))}

        </div>
    )
}