import React, { useEffect, useMemo, useState } from 'react'
import { HomeStyled } from '../StyledComponents/HomeStyled'
import { PersonCircle } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'



const Home = () => {
const navigate = useNavigate()
const [task, setTask] = useState({
  title:"", content:"", date:Date()
})

const [user, setUser] = useState({task:[]})

const onchangeHandler =(e)=>{
  
setTask({...task, [e.target.name]: e.target.value})
}

const onSubmitHandler = (e) =>{
  e.preventDefault();
  fetch('http://localhost:5500/add-task', {method:"POST", body:JSON.stringify(Object.assign({task , id:user.id})), headers:{'Content-Type': 'application/json'}}).then((res)=>{
    if(res.status === 200){
      getProfile()
    }
  })
}

const logoutHandler = () =>{
  localStorage.removeItem('auth_token')
  navigate('/')
}

// useMemo(()=>{
//   console.log("cuuret value is " + JSON.stringify(task))
// },[task])

console.log(task)

const getProfile =()=>{
  let token = localStorage.getItem('auth_token')
  console.log(token)

fetch('http://localhost:5500/user-profile',{method:"GET" , headers:{"authorization": "Bearer " + token}}).then((res)=>{
return res.json()
}).then((response)=>{
  if(response.name === "TokenExpiredError"){
    navigate('/')
  }else{
    console.log(response)
    setUser(response)
  }

})
}

useEffect(()=>{
  let token = localStorage.getItem('auth_token')
  if(token){
    getProfile()
  }else{
    navigate('/')
  }
 
  
},[])
  

  return (
    <HomeStyled>
      <div className='profile-info'>
        <div className='heading'>
          <h2>Profile</h2>
        </div>
        <div className='profile-icon'>
          <PersonCircle />
          <h4>{user.fullname}</h4>
        </div>

        <div className='basic-info'>
          <div className='email'>
            <h4>Email</h4>
            <span>{user.email}</span>
          </div>
          <div className='phone'>
            <h4>Phone</h4>
            <span>{user.phone}</span>
          </div>

        </div>
        <div className='actions'>
          <div className='edit-profile'>
            <button type='button'>Edit Profle</button>
          </div>


        </div>
        <div className='logout'>
          <button type='button' onClick={logoutHandler}>Logout</button>
        </div>

      </div>
      {/* Profile information end  */}

      <div className='task-info'>
        <div className='navigation'>
          <div className='task-heading'>
            <h2>Your Tasks</h2>
          </div>
          <div className='add-or-completed'>
            <div className='add'>
              <button data-bs-toggle="modal" data-bs-target="#addTask">Add Task</button>
            </div>
            <div className='completed'>
              <button>Completed Tasks</button>
            </div>
          </div>

        </div>
        <div className='task-container'>
          {user.task.map((element) => {
            return <div className='task'>
              <div className='date-time d-flex'>
                <h5>Date</h5>
                <span className='m-auto mx-2'>{element.date.slice(0,24)}</span>
              </div>
              <div className='task-content'>
                <h5>{element.title}</h5>
                <span>{element.content}</span>
              </div>
              <div className='task-actions'>
                <button className='edit'>Edit</button>
                <button className='complete'>Completed</button>
                <button className='delete'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>

      {/* MODALS  */}

      {/* add task  */}

      <div class="modal fade" id="addTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form >
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Title </label>
                  <input type="text" class="form-control" value={task.title} onChange={onchangeHandler} name="title" id="exampleInputEmail1" aria-describedby="emailHelp" />
                 
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Task Content</label>
                  <textarea type="text" class="form-control" value={task.content} onChange={onchangeHandler} name="content" id="exampleInputPassword1" style={{height:"100%"}} />
                </div>
                
              </form>
            </div>
            <div class="modal-footer">
              {/* <button type="button" class="btn btn-secondary" >Close</button> */}
              <button type="button" onClick={onSubmitHandler} data-bs-dismiss="modal" class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>


    </HomeStyled>
  )
}

export default Home