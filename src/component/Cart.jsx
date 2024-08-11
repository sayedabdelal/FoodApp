// src/components/Cart.js
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    return (
    <div>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
            <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
            </li>
            ))}
        </ul>
    </div>
    );
};

export default Cart;
