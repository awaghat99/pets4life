import React from 'react'

const BasketItem = () => {
  return (
    <div className='Basket-item'>
        <div className='Basket-image'>
        <img src='https://cdn2.thecatapi.com/images/ef1.jpg'/>
        </div>
        <div className='Basket-price'>
            <h3>£100</h3>
        
            <h2>British Short-hair</h2>
        </div>
    </div>
  )
}

export default BasketItem
