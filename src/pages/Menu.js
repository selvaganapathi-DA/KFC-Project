import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Perichicken from '../product/Perichicken'
import { FaShoppingCart } from "react-icons/fa";
import './Menu.css'
import Value from '../product/Value'
import Chick from '../product/Chick'
import Buckt from '../product/Buckt'
import Birbuckt from '../product/Birbuckt'
import SearchBar from './SearchBar'
import BoxMeal from '../product/BoxMeal'
import Burger from '../product/Burger'
import Snackes from '../product/Snackes'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart,addToCart,increment,decrement } from '../Store/CartSlice/CartSlice';
import Beverage from '../product/Beverage'
import thre from '../images/thre.svg'
const Menu = () => {
const ItemList = [...Birbuckt , ...Buckt , ...Chick , ...Perichicken , ...Value, ...BoxMeal, ...Burger, ...Snackes, ...Beverage]

const CartProduct  = useSelector ((state) => state.cart.cartItems)

const dispatch = useDispatch ();

const  addCart = (item) => {
  dispatch(addToCart(item))
}

const deleteCart =(item)=>{
  dispatch(deleteFromCart(item))
}

return (
    <div>
      <Navbar/>
      <body class="scrol" data-bs-spy="scroll" data-bs-offset="15" data-bs-target="#myScrollspy">
        <section>
        <div className='container-lg mt-5'>
        <div class= "row">
          <div class ="col-1">
          <img src={thre} class="card-img-top ig-res" alt="..."/>
          </div><h1>KFC MENU</h1>
        </div>
        </div>
        </section>
    <div class="container-lg mt-0 mb-2">
    <div class="row">
        <div class="col-lg-3 mt-8" id="myScrollspy">
        <div id="list-example" class="list-group">
        <div class="list-group gap-2  border-0">
                <a class="list-group-item list-group-item-action active border-0" href="#section1">PERI PERI CHICKEN</a>
                <a class="list-group-item list-group-item-action border-0" href="#section2">VALUE SNACKERS</a>
                <a class="list-group-item list-group-item-action border-0" href="#section3">CHICKEN ROLLS</a>
                <a class="list-group-item list-group-item-action border-0" href="#section4">CHICKEN BUCKETS</a>
                <a class="list-group-item list-group-item-action border-0" href="#section5">BIRIYANI BUCKETS</a>
                <a class="list-group-item list-group-item-action border-0" href="#section6">BOX MEALS</a>
                <a class="list-group-item list-group-item-action border-0" href="#section7">BURGERS</a>
                <a class="list-group-item list-group-item-action border-0" href="#section8">SNACKERS</a>
                <a class="list-group-item list-group-item-action border-0" href="#section9">BEVERAGES</a>
            </div>
</div>
            
        </div>
        <div class="col-sm-9" data-coreui-spy="myScrollspy" data-bs-smooth-scroll="true" data-coreui-target="#list-example" data-coreui-offset="0" tabindex="0" >
        
<SearchBar ItemList ={ItemList} />
        <div id="section1" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
				<h2>PERI PERI CHICKEN</h2>
				<div className='row'>
        {Perichicken.map((item)=>(
     <div className='col-lg-6 mt-3 mb-1'>
          <div class="card" key={item.id}>
          <div class="card_img">
          <img src={item.img} class="card-img-top img-responsive" alt="..."/>
          </div>
          <div class="card-body">
          <strong class="card-title">{item.title}</strong>
          <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>
             <p>{item.des} </p>
             {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button type="button"  className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart /></button>
 }
      </div>
      </div>
      </div>
      ))}                   
</div>
</div>
		
			<div id="section2">
				<h2 class="mt-4">VALUE SNACKERS</h2>
<div className='row'>
{Value.map((item)=>(
     <div className='col-lg-4 mt-3'>
          <div class="card h-100" key={item.id}>
          <img src={item.img} class="card-img-top" alt="..."/>
          <div class="card-body">
          <strong class="card-title">{item.title}</strong>
          <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>          
          <p>{item.des} </p>
{CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button type="button" className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart /></button>
 }        
         </div>
      </div>
            </div>
            ))}
  
</div>
            </div>
            			<div id="section3">
				<h2 className='mt-3'>CHICKEN ROLLS</h2>
		<div className='row'>
    {Chick.map((item)=>(
     <div className='col-lg-4 mt-3'>
          <div class="card h-80" key={item.id}>
          <img src={item.img} class="card-img-top" alt="..."/>
          <div class="card-body">
          <strong class="card-title">{item.title}</strong>
          <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>             
          <p>{item.des} </p>
             {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button type="button"   className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart /></button>
 }         </div>
      </div>
            </div>
            ))}
    </div>
            </div>
	
			<div id="section4">
				<h2>CHICKEN BUCKETS</h2>
  <div className='row'>
{Buckt.map((item)=>(
   <div className='col-lg-4 mt-3'>
   <div class="card h-100" key={item.id}>
   <img src={item.img} class="card-img-top" alt="..."/>
   <div class="card-body">
   <strong class="card-title">{item.title}</strong>
   <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>      
          <p>{item.des} </p>
      {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>:
<button type="button"  className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart /></button>
 }
  </div>
</div>
     </div>
))}
  </div>
            </div>
			
			<div id="section5">
				<h2>BIRIYANI BUCKETS</h2>
      <div className='row'>
        {Birbuckt.map((item) =>(
           <div className='col-lg-4 mt-3'>
           <div class="card h-80" key={item.id}>
           <img src={item.img} class="card-img-top" alt="..."/>
           <div class="card-body">
           <strong class="card-title">{item.title}</strong>
           <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>
          <p>{item.des} </p>
              {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button type="button" className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart /></button>
 }
          </div>
        </div>
             </div>
        ))}
      </div>
			</div>
   

      <div id="section6">
				<h2 className='mt-3'>BOX MEALS</h2>
      <div className='row'>
        {BoxMeal.map((item) =>(
           <div className='col-lg-4 mt-3'>
           <div class="card h-80" key={item.id}>
           <img src={item.img} class="card-img-top" alt="..."/>
           <div class="card-body">
           <strong class="card-title">{item.title}</strong>
           <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>              
          <p>{item.des} </p>
              {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button type="button" className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart /></button>
 }
          </div>
        </div>
             </div>
        ))}
      </div>
			</div>

      <div id="section7">
				<h2>BURGERS</h2>
        <div className='row'>
        {Burger.map((item) =>(
           <div className='col-lg-4 mt-3'>
           <div class="card h-80" key={item.id}>
           <img src={item.img} class="card-img-top" alt="..."/>
           <div class="card-body">
           <strong class="card-title">{item.title}</strong>
           <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>
          <p>{item.des} </p>
              {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button  type="button"  className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart /></button>
 }
          </div>
        </div>
             </div>
        ))}
      </div>
			</div>

      <div id="section8">
				<h2>SNACKERS</h2>
        <div className='row'>
        {Snackes.map((item) =>(
           <div className='col-lg-4 mt-3'>
           <div class="card h-80" key={item.id}>
           <img src={item.img} class="card-img-top" alt="..."/>
           <div class="card-body">
           <strong class="card-title">{item.title}</strong>
           <p>
          <small>₹</small>
          <strong>{item.price}</strong>
          </p>              
          <p>{item.des} </p>
              {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button  type="button"  className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart/></button>
 }
          </div>
        </div>
             </div>
        ))}
      </div>
			</div>


      <div id="section9">
				<h2>BEVERAGES</h2>
        <div className='row'>
{Beverage.map((item)=>(
     <div className='col-lg-4 mt-3'>
     <div class="card h-80" key={item.id}>
     <img src={item.img} class="card-img-top" alt="..."/>
     <div class="card-body">
     <strong class="card-title">{item.title}</strong>
     <p>
    <small>₹</small>
    <strong>{item.price}</strong>
    </p>              
    <p>{item.des} </p>
        {CartProduct.find(items => items.id === item.id) ? 
<button type='button' className='btn btn-danger' onClick={()=>{deleteCart(item)}}>REMOVE FROM CART</button>             :
<button type="button"  className='btn btn-danger' onClick={()=>{addCart(item)}}>ADD TO CART <FaShoppingCart/></button>
}
    </div>
  </div>
       </div>
))}
        </div>
        </div>



			</div>
      </div>
</div>
</body>

    <Footer/>
    </div>
  )
}

export default Menu