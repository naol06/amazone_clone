import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Header() {
  const[{basket,user},dispatch]=useStateValue();
 const handleAuthentication=()=>{
  if(user){
   auth.signOut()
  }
 }
  return (
    <div className='header'>
<Link to={'/'}><img className='header_logo' src='https://th.bing.com/th/id/R.1a7d775d8d218f2393fd8848a386ef6e?rik=7TbtU1w9lgPMvQ&pid=ImgRaw&r=0' alt='Amazone'/></Link>
 <div className='header_search'>
    <input type='text' className='header_searchInput'/>
    <i className="bi header_searchIcon bi-search"></i>
    </div>
    <div className='header_nav'>
    <Link className='text-decoration-none' to={!user&&"/login"}>
    <div onClick={handleAuthentication} className='header_option'>
    <span className='header_optionLineOne'>Hello {!user? "Gust":user.email}</span>
      <span className='header_optionLineTwo'>{!user ?"Sign In":"Sign out"}</span>
    </div>
    </Link>
     <div className='header_option'>
    <span className='header_optionLineOne'>Returns</span>
      <span className='header_optionLineTwo'>& Orders</span>
    </div>
     <div className='header_option'>
    <span className='header_optionLineOne'>Your</span>
      <span className='header_optionLineTwo'>Prime</span>
    </div>
    <div className='header_optionBasket'>
   <Link className='text-decoration-none text-white' to={'/checkout'}> <i className="bi header_basketCount na bi-cart-plus"><span className='jj'>{basket.length}</span></i></Link>
    
    </div>
    </div>
    </div>
  )
}

export default Header