import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import logo from '../images/kfc.svg'
import './navbar.css'
// import { Context } from '../context';
import shop_cart  from '../images/bucket_cart_icon.png'
import cart from '../pages/Cart'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const CartProduct = useSelector((state) => state.cart.cartItems)
  const totalQuantity = CartProduct.reduce((total, item) => total +  (item.quantity), 0)

  return (
    <div>
        <nav class="navbar  navbar-expand-lg bg-body-tertiary position-fixed w-100 top-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">  
    <img src={logo} class="d-inline-block align-text-top"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/menu">Menu</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to ="/cart">Cart</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <IoPersonCircleOutline size="26px"  />
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/signin">Sign in</Link></li>
            <li><Link class="dropdown-item" to="/login">Log in</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/logout">Log out</Link></li>
          </ul>
        </li>
      
      </ul>
      <div>
        </div>

      <form class="d-flex" role="search">
      <span className='shopping-cart'><MdAddShoppingCart size="28px" containerStyle={{marginHorizontal: 15, position: 'relative'}}/>
  <span class="badge">{totalQuantity}</span>  

</span>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;