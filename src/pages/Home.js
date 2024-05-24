import React from 'react'
import banner from '../images/banner.PNG'
import cat86 from '../images/CAT86.jpg'
import cat99 from '../images/CAT99.jpg'
import cat158 from '../images/CAT158.jpg'
import cat170 from '../images/CAT170.jpg'
import cat190 from '../images/CAT190.jpg'
import cat224 from '../images/CAT224.jpg'
import cat233 from '../images/CAT233.jpg'
import las from '../images/las.JPG'
import './Home.css';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { Card } from '@contentful/f36-components';

const Home = () => {

  return (
    <div>
      <Navbar/>
 <img src={banner} class="img-fluid mt-5" alt="..."/>
 

<div class="container"> 
    <div class="row">
    <div class="col-lg-12" className='ico'>
    <div class="col-lg-4 mt-7" className='icon'><h2>BROWSE MENU CATEGORIES</h2></div>   
    </div>
    </div>
    </div>
<div className='shark text-center mt-4'>
    <div className='container'>
        <div className='row'>
            <div  className='col-lg-3'>
            <Card id="section1" as="a" href="/menu" target="_blank" >
            <img src={cat86} class="card__img" alt="..."/>
      <div  class="card-body">
      <h5 class="card-title"><Link class="nav-link"></Link> CHICKEN</h5>
  </div>
</Card>
            </div>
            <div className='col-lg-3'>
            <Card id="section2" as="a" href="/menu" target="_blank">
            <img src={cat99} class="card__img" alt="..."/>
      <div class="card-body">
       <h5 class="card-title">VALUE SNACKERS</h5>
  </div>
</Card>
            </div>
            <div className='col-lg-3'>
            <Card id="section3" as="a" href="/menu" target="_blank">
            <img src= {cat158}class="card__img" alt="..."/>
     <div class="card-body">
       <h5 class="card-title">CHICKEN ROLLS</h5>     
  </div>
</Card>
            </div>
            <div className='col-lg-3'>
            <Card id="section1" as="a" href="/menu" target="_blank">
            <img src={cat170} class="card__img" alt="..."/>
      <div class="card-body">
         <h5 class="card-title">CHICKEN BUCKETS</h5>
  </div>
</Card>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-lg-3'>
            <Card id="section1" as="a" href="/menu" target="_blank">
            <img src={cat190} class="card__img" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">BRIYANI BUCKETS</h5>
  </div>
</Card>
            </div>
            <div className='col-lg-3'>
            <Card id="section1" as="a" href="/menu" target="_blank">
            <img src={cat224} class="card__img" alt="..."/>
     <div class="card-body">
      <h5 class="card-title">BOX MEALS</h5>
  </div>
</Card>
            </div>
            <div className='col-lg-3'>
            <Card id="section1" as="a" href="/menu" target="_blank">
            <img src={cat233} class="card__img" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">BURGERS</h5>
  </div>
</Card>
            </div>
            <div className='col-lg-3 '>
            <Card id="section1" as="a" href="/menu" target="_blank">
            <img src={las} class="card__img" alt="..."/>
                   <div class="card-body">
        <h5 class="card-title">View All Menu</h5>
  </div>
</Card>
            </div>
        </div>
    </div>
</div>

{/* <div className='footer-in mt-5'>
  <footer className='text-lg-start bg-black  text-white'>
  <div class="container p-4">
    
    <div class="row">
    <div class="col-lg-1">
      <img src= {kfc} class="card-img-top" alt="..."/>
    </div>
      <div class="col-lg-2">
        <h5>Legal</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="cd text-white">Terms and Condtions</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Privacy Policy</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Disclaimer</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Caution Notice</a>
          </li>
        </ul>
      </div>
     
      <div class="col-lg-2">
        <h5>KFC India</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="cd text-white">About KFC</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">KFC Care</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Careers</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Our Golden Past</a>
          </li>
        </ul>
      </div>
 
      <div class="col-lg-2">
        <h5>KFC Food</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="cd text-white">Menu</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Order Lookup</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Gift Card</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Nutrition & Allergen</a>
          </li>
        </ul>
      </div>
    
      <div class="col-lg-2">
        <h5>Support</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="cd text-white">GetHelp</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Contact Us</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">KFC Feedback</a>
          </li>
          <li>
            <a href="#!" class="cd text-white">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div class="col-lg-1">
      <ul class="list-unstyled">
      <li>
            <a href="#!" class="text-white">Find a KFC</a>
          </li>
            </ul>
      </div>
      <div class="col-lg-1">
      <ul class="list-unstyled">
          <li>
            <img src= {play} class="card-img-top" alt="..."/>
          </li>
            </ul>
      </div>
      <div class="col-lg-1">
      <ul class="list-unstyled">
          <li>
            <img src= {app} class="card-img-top" alt="..."/>
          </li>
            </ul>
      </div>
    </div>
   
  </div>


  <div class="text-center p-2" >
  Copyright © KFC Corporation 2024 All Rights Reserved
    <a class="text-body" href="https://online.kfc.co.in/"> </a>
    <img src ={fb} class="cto" alt="..." />
    <img src={inst} class="cto" alt="..." />
    <img src={twet} class="cto" alt="..."/>
  </div>
  </footer>
</div> */}

<Footer/>
</div>
)
}

export default Home;