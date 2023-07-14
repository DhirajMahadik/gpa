import React, { useState } from 'react'
import styled from 'styled-components'

const ForgetPass = () => {

    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState(false)
    const [msgData, setmsgData] = useState("")

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        fetch('https://tiny-plum-dog-tam.cyclic.app/forget-pass',{method:"POST", headers: { 'Content-Type': 'application/json' }  , body:JSON.stringify({email:email})} ).then((res)=>{
            return res.json()
        }).then((msg)=>{
            setmsgData(msg.msg)
            setTimeout(()=>{
             setMsg(true)
             setEmail('')
            })
            
            // console.log(msg)
        })
    }

  return (
    <FORGET_PASS>
        <div className='outer-form'>
            <h3>Enter your registered email to recover your password</h3>
            <form onSubmit={onSubmitHandler}>
                <input value={email} name='email' onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder='Enter your email' />
                <button type="submit">Recover Password</button>
                {msg ?<span>{msgData}</span>:"" }
            </form>
        </div>

    </FORGET_PASS>
  )
}

export default ForgetPass

const FORGET_PASS = styled.div`
    height: 100vh;
    background-color: lightgray;
    display: flex;

    .outer-form{
        margin: auto;
        padding: 20px 50px 50px 50px;
        border: solid #fff 1px;
        border-radius: 20px;
        background-color: #a13333;

        h3{
            text-align: center;
            margin: 10px auto;
            color: #fff;
        }
        
        form{
            display: flex;
            flex-direction: column;
            margin: 10px auto;

            input{
                margin: 10px auto;
                display: block;
                width: 300px;
                padding: 10px;
                border-radius: 10px;
                border: none;
                :focus{
                    border: none;
                }
            }

            button{
                margin: 10px auto;
                padding: 5px 10px;
                border-radius: 20px;
                cursor: pointer;
            }

            span{
                color: lightgreen;
                margin: auto;
            }



        }
    }
`