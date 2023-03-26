import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginStyled } from '../StyledComponents/LoginStyled'


const Login = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email:"", password:""
  })

  const onChangeHandler = (e) =>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

const login = (e)=>{
e.preventDefault()
fetch('http://localhost:5500/login', {  method:'POST',body:JSON.stringify(credentials), headers:{'Content-Type':'application/json'}}).then((res)=>{
    return res.json()
}).then((token)=>{
  console.log(token)
  if(token.token){
    localStorage.setItem("auth_token", token.token)
    navigate('/user-profile')
  }else{
    alert(token.error)
  }
}).catch((err)=>{
  console.log(err)
})
}

  return (
    <LoginStyled className="login-box">
      <samp> For testing purpose use </samp> <br />
      <samp>usename : "demo@gmail.com"</samp><br />
      <samp>password : "demo".</samp>

      <h2>Login</h2>
      <form onSubmit={login}>
        <div className="user-box">
          <input type="email" name="email" onChange={onChangeHandler} value={credentials.email} required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" onChange={onChangeHandler} value={credentials.password} required="" />
          <label>Password</label>
        </div>
        <button type='submit' >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      <h6 className='my-2'>don't have accout <Link to="/register">Register</Link></h6>
    </LoginStyled>
  )
}

export default Login