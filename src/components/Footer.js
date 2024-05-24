import React from 'react'
import kfc from '../images/kfc-logo.jpg'
import play from '../images/google_play.webp'
import app from '../images/apple.webp'
import fb from '../images/gf.png'
import twet from '../images/tee.png'
import inst from '../images/insta.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
    <div className='footer-in mt-4'>
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
    
      <div class="col-lg-2 supp">
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

      <div class="col-lg-1 inline-item">
      <ul class="list-unstyled">
      <li>
      <CiLocationOn/>
 <a href="#!" class="text-white">KFC</a>
          </li>
            </ul>
      </div>

      <div class="col-lg-2">
      <ul class="list-unstyled">
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.yum.kfc">  
            <img src= {play} class="card-img-top" alt="..."/></a>
          </li>
          <br/>
          <li>
            <a href="https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379">
              <img src= {app} class="card-img-top" alt="..."/></a>
          </li>
            </ul>
      </div>

    </div>
  </div>


  <div class="text-center" >
  <a class="text-white" href="https://online.kfc.co.in/"> Copyright © KFC Corporation 2024 All Rights Reserved</a>
  </div>
  <div class="container"> 
    <div class="row">
    <div class="col-lg-4" className='icon'>   <FaFacebook />         <FaInstagram />    <FaSquareXTwitter /></div>   
    </div>
    </div>
 
  </footer>
</div>
</div>
  )
}

export default Footer;
