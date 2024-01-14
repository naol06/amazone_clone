import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch] =useStateValue()
   const removeFromBasket=()=>{
    console.log(id);
dispatch({
  type:"REMOVE_FROM_BASKET",
  id:id,
})
   }
  return (
       <div className='checkoutProduct'>
        <img className='checkoutProduct_image' 
        src={image}
        alt='image'
        />
        <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{title}</p>
        <p className='checkoutProduct_price'>
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
        
        {Array(rating).fill().map(()=>{
            return <p className="bi painte bi-star-fill"></p>
         })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
        </div>
  
  )
}

export default CheckoutProduct