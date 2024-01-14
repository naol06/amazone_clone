import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {
Routes,Route
} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      });
    }else{
      dispatch({
        type:"SET_USER",
        user:null,
      })
    }
  })
  }, []);
  return (  
    <div className="App">
    <Routes>
   <Route path='/' element={<div>
    <Header/><Home/>
    </div>}/>
    </Routes>
    <Routes>
    <Route path='/checkout' element={<div>
     <Header/><Checkout/>
     </div>}/>
     </Routes>
     <Routes>
     <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
