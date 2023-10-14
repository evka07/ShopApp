import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.title} - Size: {item.selectedSize}, Color: {item.selectedColor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
