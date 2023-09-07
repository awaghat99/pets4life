import React, { useState } from 'react';
import "../style.css";

function Checkout() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [cardNumber, setcardNumber] = useState('');
    const [nameonCard, setnameonCard] = useState('');
    const [CVC, setCVC] = useState('');
    
    
    return (
        <div class="checkout">
            <h1>Checkout</h1>
            <div class="name">
            <input
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
            />
            </div>
            <div className='last'>
            <input
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
            />
            </div>
            <div class="address">
            <input
                type="text"
                placeholder="Enter first line of address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            <div className='address2'>
            <input
                type="text"
                placeholder="Enter second line of address"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
            />
             </div>
            <div class="paymentmethod">
                <h1>Payment Method</h1>
                <div class="payment">
            <input
                type='text'
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => setcardNumber(e.target.value)}
            />
            </div>
            <div class="cardName">
            <input
                type='text'
                placeholder="Name on Card"
                value={nameonCard}
                onChange={(e) => setnameonCard(e.target.value)}
            />
            </div>
            <div class="cvcNumber">
            <input
                type='text'
                placeholder="CVC Card"
                value={CVC}
                onChange={(e) => setCVC(e.target.value)}
            />
           </div> 

        </div>
        <button onClick={() => alert('Checkout completed!')}>Checkout</button>
        </div>
    );
            
}
export default Checkout;


   

















































