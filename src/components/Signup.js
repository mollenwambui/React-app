
import React, { useState } from 'react';
import logo from '../images/logo.png';
import office from '../images/Office.png'
import './Signup.css'

 
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    // TODO: Send form data to server or perform validation
  };

  return (
    <div className='both'> 

        <div className='orange'>
        <img src={logo} className= 'logos'/>
        <img src={office} className= 'offices'/>
            
        </div>
        <div>
       
 <form onSubmit={handleSubmit}>
   <p>
    <p> <label htmlFor="first-name">First Name:</label></p>
   
   <input
     type="text"
     id="first-name"
     value={firstName}
     onChange={(event) => setFirstName(event.target.value)}
   />
</p>
   
 <p> 
    <p> 
        <p><label htmlFor="last-name">Last Name:</label></p></p>
        
   
   <input
     type="text"
     id="last-name"
     value={lastName}
     onChange={(event) => setLastName(event.target.value)}
   /></p>
   

 <p>  
    <p>  <label htmlFor="email">Email:</label></p>
    
  
   <input
     type="email"
     id="email"
     value={email}
     onChange={(event) => setEmail(event.target.value)}
   /></p>
 

<p>
     
      <label htmlFor="password">Password:</label>
   <input
     type="password"
     id="password"
     value={password}
     onChange={(event) => setPassword(event.target.value)}
   /></p>
  

   <p> <label htmlFor="confirm-password">Confirm Password:</label>
   <input
     type="password"
     id="confirm-password"
     value={confirmPassword}
     onChange={(event) => setConfirmPassword(event.target.value)}
   />
 </p>
  
 <button type="submit">Sign Up</button>
 </form>
        </div>

    </div>
   
   
  );
}



 

export default Signup;