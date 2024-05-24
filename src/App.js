import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Sign from './pages/Sign';
import Login from './pages/Login';
import Chick from './product/Chick';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path ='/signin' element={<Sign/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path ='/cart' element ={<Cart/>}/>
          <Route path ='/product/Chick' element ={<Chick/>}/>
          <Route path="*">Ups</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
