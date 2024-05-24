import React, { useState } from "react";
import cat99 from '../images/logo.png'

import './Login.css'
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit or process the data here
      console.log("Form data:", formData);
      setSubmitted(true); // Set a submitted flag
    } else {
      // Form is not valid, display error messages
    }
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className={'tc mt-5'}>
      
      {submitted ? (
        <div className="success-message">
          <p><strong>Login Successful!</strong></p>
          </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div >
          <div className={'ic'}>
          <h5 className={'h5'}>Login</h5>
          <div className='df mt-3'>
            <img src={cat99} class="cto" alt="..."/>

            </div>
            <div class="df mt-3">
                <p class="a"><i>LET’S LOG IN  WITH YOUR EMAIL & PASSWORD!</i>
</p>
            </div>  
            <div class="df mt-4">
            <input
              type="email" placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleInputChange}  className={'inputBox'}
            />
            {errors.email && <div className="error">{errors.email}</div>}
            </div>
           
          </div>

          <div className={'ic'}>
          <div class ="df mt-4">
          <input
              type="password" placeholder="Password*"
              name="password"
              value={formData.password}
              onChange={handleInputChange}  className={'inputBox'}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
           
          </div>
  <div className={'ic'}><br></br>
  <button type="submit" class="btn btn-primary" disabled={!isFormValid}>
            Login
          </button>
  </div>
  </div>
        </form>
      )}
    </div>
  );
}

export default Login;


// import React, { useState } from 'react'

// const Login = (props) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const onButtonClick= (e) => {
//     e.preventDefault();
//   }

//   return (
//    <form onSubmit={onButtonClick}>
//     <div className={'mContainer mt-5'}>
      
//       <div className={'tc'}>
//         <div>Login</div>
//       </div>
//       <br />
//       <div className={'ic'}>
//         <input type="text" value={email} placeholder="Enter your email here" required onChange={(e) => setEmail(e.target.value)} className={'inputBox'}/>
//       </div>
//       <br />
//       <div className={'ic'}>
//         <input type="text" value={password} placeholder="Enter your password here" required onChange={(e) => setPassword(e.target.value)} className={'inputBox'}/>
//       </div>
//       <br />
//       <div className={'ic'}>
//         <input className={'inputButton'} type="button" class="btn btn-primary" onClick={onButtonClick} value={'Log in'} />
//       </div>
//     </div>
//     </form>

  
//   )
// }

// export default Login;

