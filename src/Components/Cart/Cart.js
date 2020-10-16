import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price*prd.quantity, 0);
    let shippingCost = 0;
    if (totalPrice > 15) {
        shippingCost = 4.99;
    }
   else if (totalPrice > 0) {
        shippingCost = 8.99;
    }
    const total = totalPrice+shippingCost;
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered {cart.length}</p>
            <p>Product Price {totalPrice}</p>
            <p><small>Shippin cost is {shippingCost}</small></p>
            <p>Total {total.toFixed(2)}</p>
            <br/>
            <Link to="/review"><button className="main-button">Review Order</button></Link>
        </div>
    );
};

export default Cart;