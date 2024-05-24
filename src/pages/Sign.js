import React, { useState } from 'react'
import './Sign.css';
import cat99 from '../images/logo.png'
import { Link } from 'react-router-dom';
const Sign = (props) => {
    const [email, setEmail] = useState('')
    const [password,setPassword]= useState('')
  
  const onButtonClick = () => {
    // You'll update this function later...
  }

  return (
    <div className='shark text-center mt-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
            <div class="card-invisible">
        
            </div></div>
                <div className='col-md-6'>
            <div class="card-invisible">

            <div class ="mt-3">Sign In/Sign up</div>
            <div className='df mt-5'>
            <img src={cat99} class="cto" alt="..."/>

            </div>
            <div class="df mt-3">
                <p class="bold-text"><i>LET’S SIGN IN  WITH YOUR EMAIL & PASSWORD!</i>
</p>
            </div>  
            <div class="df mt-4">
            <input value={email} placeholder="Email*" onChange={(ev) => setEmail(ev.target.value)} className={'inputBox'} required />
            </div>
            <div class="df mt-4">
            <input value={password} placeholder="Password*" onChange={(ev) => setPassword(ev.target.value)} className={'inputBox'} required />
            </div>   
           
            <p class="mt-2">or</p>
            <div class="df mt-2">
<label >Already as a Customer?<Link to ='/login'>Login</Link> </label>
            </div>
            </div></div>
            <div className='col-md-3'>
            <div class="card-invisible">
                </div></div>
                </div></div></div>

  )
}

export default Sign