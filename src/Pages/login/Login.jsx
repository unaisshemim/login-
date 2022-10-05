import React from 'react'
import LoginForm from '../../components/loginForm/LoginForm'
import './login.scss'
function Login({login}) {
  return (
    <div className='main-container'>
      <div className='left'>
        <LoginForm login={login}/>
      </div>
      <div className='right'>
        <div className='box'>
          <h1>Login</h1>
        </div>
      </div>
    </div>
  )
}

export default Login