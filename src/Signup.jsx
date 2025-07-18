import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from './firebase'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    const navigate=useNavigate();
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const handleClick=async(e)=>{
      e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,email,password);
             navigate("/dashboard");
        }catch(error){
            alert(error.message);
        }
    }
  return (
    <div style={{ backgroundColor: '#00ff80', minHeight: '100vh',paddingTop: '80px' }}>
        <div className="login-container">
      <h2>Sign in</h2>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
           <button type='button' onClick={handleClick}>sign in</button>
      </form>
    </div>

       

    </div>
  )
}

export default Signup