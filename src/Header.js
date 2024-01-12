import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>
<img className='header_logo' src='https://th.bing.com/th/id/R.1a7d775d8d218f2393fd8848a386ef6e?rik=7TbtU1w9lgPMvQ&pid=ImgRaw&r=0' alt='Amazone'/>
 <div className='header_search'>
    <input type='text' className='header_searchInput'/>
    <i className="bi header_searchIcon bi-search"></i>
    </div>
    <div className='header_nav'>
    <div className='header_option'>
    <span className='header_optionLineOne'>Hello Guest</span>
      <span className='header_optionLineTwo'>Sign In</span>
    </div>
     <div className='header_option'>
    <span className='header_optionLineOne'>Returns</span>
      <span className='header_optionLineTwo'>& Orders</span>
    </div>
     <div className='header_option'>
    <span className='header_optionLineOne'>Your</span>
      <span className='header_optionLineTwo'>Prime</span>
    </div>
    <div className='header_optionBasket'>
    <i className="bi header_basketCount na bi-cart-plus"><span className='jj'>3</span></i>
    
    </div>
    </div>
    </div>
  )
}

export default Header