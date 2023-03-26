import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginStyled } from '../StyledComponents/LoginStyled'

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        fullname:"", email:"", phone:"", password:"", confirmPassword:""
    })
    const [massege, setMassege] = useState("")

    const onChangeHandler = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const OnsubmitHandler = (e)=>{
        e.preventDefault()
        if(user.password === user.confirmPassword){
            // alert(JSON.stringify(user))
            fetch('https://different-lingerie-goat.cyclic.app/add-user', {method:"POST", body:JSON.stringify({fullname:user.fullname, email:user.email, phone:user.phone, password:user.password}), headers:{'Content-Type':'application/json'}},)
            .then((res)=>{
                if(res.status === 200){
                    navigate('/')
                }else{
                    alert("Something went wrong")
                }
            })
        }else{
            setMassege("Password didn't matched")
            setTimeout(()=>{
                setMassege("")
            },4000)
        }

    }

  return (
    <LoginStyled className="login-box">
      <h2>Registration</h2>
      <form onSubmit={OnsubmitHandler}>
        <div className="user-box">
          <input type="text" name="fullname" onChange={onChangeHandler} value={user.fullname} required />
          <label>Full Name</label>
        </div>
        <div className="user-box">
          <input type="email" name="email" onChange={onChangeHandler} value={user.email} required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="number" name="phone" onChange={onChangeHandler} value={user.phone} required />
          <label>Phone Number</label>
        </div>
        <div className="user-box">
          <input type="password" name="password" onChange={onChangeHandler} value={user.password} required />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="password" name="confirmPassword" onChange={onChangeHandler} value={user.confirmPassword} required />
          <label>Confirm Password</label>
        </div>
        <p style={{color:"red"}}>{massege}</p>
        <button type='submit'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </button>
      </form>
      <h6 className='my-2'>alredy have accout <Link to="/">Login</Link></h6>
    </LoginStyled>
  )
}

export default Register