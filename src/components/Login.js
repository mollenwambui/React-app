import logo from '../images/logo.png';
import office from '../images/Office.png'
import './Login.css'
import React, { useState } from 'react';
import './Signup.js';
import Signup from './Signup.js';
import { Link } from 'react-router-dom';



function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

   const handleSignUpClick=()=>{

    

   }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login logic
  };
    return(
        <div className='login'>
        <div className='orange'>
           
            <img src={logo} className= 'logo'/>
            <img src={office} className= 'office'/>
            
       
        
        </div>

        <div className='white'>
        <h1 className='welcome'>Welcome back!</h1>
        <p className='details'>Please enter your email and password:</p>
      <form onSubmit={handleSubmit}>
        <label>
        <p> Email address</p>
         
          <input className='email'  type="email" placeholder='johndoe@gmail.com'  value={email} onChange={handleEmailChange} />
        </label>
        <br />

        <label>
            <p>  Password</p>
        
          <input className='password'  type="password" placeholder='..........'  value={password} onChange={handlePasswordChange} />
          <i class="far fa-eye" id="togglePassword"></i>
        </label>
        <br />
        <p className='remember'> <input type="checkbox" /> Remember me</p>
        <p className='forgot'>Forgot password?</p>
       
        <button className='button' type="submit">Login</button>
         <p>Don't have an account? <Link to="/signup" className='signup'>Sign up</Link></p>
      
      
      </form>
    </div>


        </div>



   

    )
   
}

export default Login;