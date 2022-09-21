import { Link } from "react-router-dom";
import React from 'react';
import {AiFillShopping} from 'react-icons/ai';
import CartContext from "./CartContext";
import { useContext } from "react";

export default function Nav(){

    const {items} = useContext(CartContext);


    return (
        <nav>
            <Link to = {'/'}>
                <h1>Products</h1>
            </Link>

            <Link to ='/checkout'>
                <AiFillShopping />
                <span>Items: {items.length}</span>
            </Link>

        </nav>
    )
}