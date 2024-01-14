import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "./firebase"
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
function Login() {
    const navigate=useNavigate()
    const [dataInput, setdataInput] = useState({
        email:"",
        password:""
    });
    const signIn=(e)=>{
   e.preventDefault();
   signInWithEmailAndPassword(auth,dataInput.email,dataInput.password)
   .then(res=>{
navigate("/")
   })
   .catch(err=>alert(err))
    }
    const register=(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,dataInput.email,dataInput.password)
        .then(res=>{
            navigate("/")
        })
        .catch(err=>alert(err))
    }
  return (
    <div className="login">
    <Link cla to='/'>
      <img alt="login-logo"
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />
    </Link>
    <div className="login__container">
      <h1>Sign-in</h1>
      <form>
        <h5>E-mail</h5>
        <input
          type="text"
        onChange={e=>setdataInput({...dataInput,email:e.target.value})}
          value={dataInput.email}
        />
        <h5> Password</h5>
        <input
          type="password"
          onChange={e=>setdataInput({...dataInput,password:e.target.value})}
          value={dataInput.password}
        />
        <button
          type="submit"
          className="login__signInButton"
          onClick={signIn}
        >
          Sign In
        </button>
      </form>
      <p>
        By signing-in you agree to the Amazon Fake Clone conditions of use
        sale . please see our privacy notice, our cookies Notice and our
        Interest-Based Ads Notice.
      </p>

      <button onClick={register} className="login__registerButton">
        Create your Amazon Account
      </button>
    </div>
  </div>
  )
}

export default Login