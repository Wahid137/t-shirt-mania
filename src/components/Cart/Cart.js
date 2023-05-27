import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!!</p>
    }
    else {
        message = <p>Thanks for buying</p>
    }

    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h2>
            <h4 className={`bold ${cart.length === 2 ? `blue` : `yellow`}`}>Order Quantity: {cart.length}</h4>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }

            {cart.length === 3 ? <p>Tin jon K gift diba??</p> : <p>kino kino</p>}
            <p>And Operator</p>
            {cart.length === 2 && <h2>Double items</h2>}
            <p>OR Operator</p>
            {cart.length === 4 || <p>Charta item na</p>}
        </div>
    );
};

export default Cart;
/* 
conditional rendering
1. use element in a variable and then use if else to set value
2. ternary operation condition ? true: false
3. && operator (if condition is true, i want to display something)
4. || operator (if condition is false, i want to display something)
*/