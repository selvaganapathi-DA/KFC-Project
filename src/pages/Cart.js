import React, { useContext } from 'react'
import './Cart.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import cat99 from '../images/logo.png'
import ban from '../images/emc.png'
import { Link } from 'react-router-dom'
import thre from '../images/thre.svg'

import { deleteFromCart, increment, decrement, updateQuantity } from '../Store/CartSlice/CartSlice'
const Cart = () => {
   
    const CartProduct = useSelector((state) => state.cart.cartItems)
  
    const dispatch = useDispatch()

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }
    const incrementCart = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }))
    }
    const decrementCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }))
        }
    }
    
    const totalQuantity = CartProduct.reduce((total, item) => total +  (item.quantity), 0)
    const totalAmont = CartProduct.reduce((total, item) => total +(item.price*item.quantity), 0)
    const totalprice = totalAmont.toFixed(2);

    return (
        <div>
            <Navbar />

            <div class="page-content page-container" id="page-content">
{totalQuantity ? <div class="padding">
                    <div class="container mt-6 d-flex">
                        <div class="col-lg-8 mt-4 stretch-card">
                            <div class="card mt-5">
                                <div class="card-body mt-5">
                                    <h4 class="card-title text-center">Details Of Order KFC</h4>
                                    <hr />

                                    <div class="table-responsive" className='col'>
                                            <table id="faqs" className="print" class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th> <bold>Image</bold></th>
                                                        <th > <bold>Title</bold></th>
                                                        <th > <bold>Description</bold></th>
                                                        <th ><bold>Price</bold></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th></th>
                                                        <th ><bold>Status</bold></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {CartProduct.map((item) => (
                                                    <tr>
                                                        <td class="tds"><img src={item.img} class="card-img-top" alt="..." /></td>
                                                        <td class="tds"><p> {item.title}</p></td>
                                                        <td class="tds"><p>{item.des}</p></td>
                                                        <td class="tds"><p>₹<bold>{item.price}</bold></p></td>
                                                        <td class="tds">
                                                            {item.count > 1 && (<>
                                                                <span style={{ marginLeft: '1rem' }}>
                                                                    <b>Count: </b>x{item.count}
                                                                </span>

                                                            </>)}
                                                        </td>
                                                        <td><button onClick={() => decrementCart(item.id, item.quantity)} className="cart-btn">
                                                            {' '}
                                                            -{' '}
                                                        </button></td>
                                                        <h6>{item.quantity}</h6>
                                                        <td class="mt-8"><button type='button' className='btn btn-danger' onClick={() => deleteCart(item)}>Delete</button>
                                                        </td>
                                                        <td> <button onClick={() => incrementCart(item.id, item.quantity)} className="cart-btn">
                                                            {' '}
                                                            +{' '}
                                                        </button> </td>
                                                    </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                    </div>           
                                </div>
                            </div>
                        </div>
                        <div class="container d-flex">
<div className='col-lg-12 mt-4 stretch-card'>
<div class="card mt-5">
<div class="card-body mt-5"> 
<div className='df'>
            <img src={cat99} class="cto" alt="..."/>
            </div>
<h4 class="card-title text-center">Order Summary</h4>
                                    <hr />
<table>
    <thead>
    <tr>
        <th>Quantity</th>
        <th>SubTotal Price</th>
    </tr>
    </thead>
<tbody>
    <tr>
<td class="td_size"> {totalQuantity}</td>
<td class="td_size">{totalprice}</td>
    </tr>
</tbody>
<hr  />

</table>
                                     
<div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
<div  id='printablediv'>

</div>
</div> 
</div>
    
    </div>
    </div>
    </div>
    </div>
                </div>
                :<div>
                     <section>
        <div className='container-lg mt-5'>
        <div class= "row">
          <div class ="col-1">
          <img src={thre} class="card-img-top ig-res" alt="..."/>
          </div><h1>MY CART</h1>
        </div>
        </div>
        </section>
        <div class="container d-flex">
        <div class="row">
  <div class="col-7">
        <section>
        <p class="fw-bold" className='tst'>
        <span id="content">YOUR CART IS</span>
        <span id="content"
            >EMPTY. LET'S
            </span>
            <span id="content">START AN</span>
            <span id="content">ORDER!</span>
        <Link class="nav-link" to="/menu"><button  type="bt" class="btn btn-danger"> Start Order</button>
  </Link>
</p>
 </section>
  </div>
  <div class="col-5">
    <div class="body"><br></br>
    <img src={ban} class="card-img-top" alt="..."/>
    </div>
  </div>
</div>
 </div> 
                    </div>}
                
            </div>
            <Footer />
        </div>
    )
}

export default Cart