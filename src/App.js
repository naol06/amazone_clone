import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {
Routes,Route
} from "react-router-dom";
function App() {
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
    </div>
  );
}

export default App;
