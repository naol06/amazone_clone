import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct() {
    const [{basket},action] =useStateValue()
   
  return (
  <div>
    {basket.map((data,i)=>{
     return   <div key={i} className='checkoutProduct'>
        <img className='checkoutProduct_image' 
        src={data.image}
        alt='image'
        />
        <div className='checkoutProduct_info'>
        <p className='checkoutProduct_title'>{data.title}</p>
        <p className='checkoutProduct_price'>
        <small>$</small>
        <strong>{data.price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
        
        {Array(data.rating).fill().map(()=>{
            return <p className="bi painte bi-star-fill"></p>
         })}
        </div>
        <button>Remove from Basket</button>
        </div>
        </div>
    })}
    </div>
   
  )
}

export default CheckoutProduct