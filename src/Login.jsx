import React,{useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
     const[email,setemail]=useState('');
        const[password,setpassword]=useState('');
         const navigate = useNavigate();
        const handleClick=async(e)=>{
            e.preventDefault();
            try{
                await signInWithEmailAndPassword(auth,email,password);
                  navigate('/dashboard');
            }catch(error){
                alert(error.message);
            }
    
        }
  return (
    <div style={{ backgroundColor: '#00ff80', minHeight: '100vh',paddingTop: '80px' }} >
          <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
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
        <button type="button" onClick={handleClick}>Login</button>
        <br></br>
        <br></br>
        <Link to="/signup"><h6>Do you Have an Account?<span style={{ color: '#00ff80'}}>Signup</span></h6></Link>
      </form>
      </div>
      </div>
  )
}

export default Login