import React from 'react'
import './login.css'
import userIcon from '../../image/usericon.webp'

const Login = () => {
  return (
    <>
      
      <div className='top-heading'> Admin Login</div>
      <div className="login-container">
  
        <div className="login-details card">
            <div className="image">
              <img src={userIcon} alt="usericon" />
            </div>
            <form>
              <input type="text" placeholder='User-name/Email Id'/>
              <input type="text" placeholder='Password'/>
              <button type='submit'>Signin</button>
              <div className="forget-password">
              <a href="/"> Forget Password ?</a>
              </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login