import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginStyled } from '../StyledComponents/LoginStyled'
import data from '../authData.json'


const Login = () => {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "", password: ""
  })
  // console.log(data)
  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const login = (e) => {
    e.preventDefault()
    fetch('https://different-lingerie-goat.cyclic.app/login', { method: 'POST', body: JSON.stringify(credentials), headers: { 'Content-Type': 'application/json' } }).then((res) => {
      return res.json()
    }).then((token) => {
      console.log(token)
      if (token.token) {
        localStorage.setItem("auth_token", token.token)
        navigate('/user-profile')
      } else {
        alert(token.error)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  ////////////////////////////////////////////
  let pass = []
  const [rightPannel, setRightPannel] = useState(false)
  const [passData, setPassData] = useState([])
  const [registerUser, setRegisterUser] = useState({
    fullname: "", email: ""
  })



  const addPass = (passValue) => {
    let index = pass.findIndex((element) => {
      return element === passValue
    })
    if (index === -1) {
      pass.push(passValue)
      console.log(pass)
      // setRegisterUser({...registerUser, password:pass})
    } else {
      pass.splice(index, 1)
      console.log(pass)
      // setRegisterUser({...registerUser,  password:pass})
    }
  }

  const SignUpButtonClick = () => {
    setRightPannel(true)
  }

  const SignINButtonClick = () => {
    setRightPannel(false)
  }

  const onChangeHandlerRegister = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value })
  }



  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number 
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  setInterval(() => {
    setPassData(shuffleArray(data.data))

  }, 10000)




  const OnRegister = (e) => {
    e.preventDefault()
    console.log(registerUser)
    console.log("password is : " + pass.toString())

    // alert(JSON.stringify(user))
    fetch('https://different-lingerie-goat.cyclic.app/add-user', { method: "POST", body: JSON.stringify({ fullname: registerUser.fullname, email: registerUser.email, password: pass.toString() }), headers: { 'Content-Type': 'application/json' } },)
      .then((res) => {
        if (res.status === 200) {
          navigate('/')
        } else {
          alert("Something went wrong")
        }
      })


  }



  useEffect(() => {
    setPassData(shuffleArray(data.data))
    // eslint-disable-next-line
  }, [])



  return (
    <LoginStyled className="login-box">
      <div className={`container ${rightPannel ? "right-panel-active" : ""}`} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={OnRegister}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" name='fullname' value={registerUser.fullname} onChange={onChangeHandlerRegister} />
            <input type="email" placeholder="Email" id="upmail" name='email' value={registerUser.email} onChange={onChangeHandlerRegister} />
            {/* <input type="password" placeholder="Password" />  */}
            <div className="password">
              {passData.map((element) => {
                return <div className="passimg" onClick={() => addPass(element.value)} id="s01"><img src={element.image} alt="" className="patimg" /></div>
              })}

            </div>
            <button id="signupbtn" onclick="signup()">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>

            <input type="email" placeholder="Email" id="inmail" />
            <div className="password">
              {passData.map((element) => {
                return <div className="passimg" onClick={() => addPass(element.value)} id="zz"><img src={element.image} alt="" className="patimg" /></div>
              })}

            </div>
            <a onclick="sendMail2()">Forgot your password?</a>
            <button onclick="signin()">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Hi👋,there!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signIn" onClick={SignINButtonClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signUp" onClick={SignUpButtonClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </LoginStyled>
  )
}

export default Login