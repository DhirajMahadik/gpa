import React, { useEffect, useState } from 'react'
import { HomeStyled } from '../StyledComponents/HomeStyled'
import { PersonCircle } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate()
  const [task, setTask] = useState({
    title: "", content: "", date: Date()
  })
  const [editTask, setEditTask] = useState({
    title: "", content: ""
  })

  const [profileInfo, setProfileInfo] = useState({})

  const [user, setUser] = useState({ task: [] })

  const onchangeHandler = (e) => {

    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const onchangeHandler2 = (e)=>{
    setProfileInfo({...profileInfo, [e.target.name]: e.target.value})
  }

  const onEditHandler = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value })
  }

  const editTaskValues = (editabletask) => {
    setEditTask(editabletask)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch('https://different-lingerie-goat.cyclic.app/add-task', { method: "POST", body: JSON.stringify(Object.assign({ task, id: user.id })), headers: { 'Content-Type': 'application/json' } }).then((res) => {
      if (res.status === 200) {
        setTask({title:"", content:""})
        getProfile()
      }
    })
  }

  const updateProfile =()=>{
    fetch('https://different-lingerie-goat.cyclic.app/edit-profile', { method: "POST", body: JSON.stringify(Object.assign({ fullname:profileInfo.fullname, email:profileInfo.email, phone:profileInfo.phone, id: user.id })), headers: { 'Content-Type': 'application/json' } }).then((res) => {
      if (res.status === 200) {
        getProfile()
      }
    })
  }



  const onEditSubmitHandler = (e) => {
    e.preventDefault();
    console.log(editTask)
    fetch('https://different-lingerie-goat.cyclic.app/edit-task', { method: "PUT", body: JSON.stringify(Object.assign({ editTask, id: user.id })), headers: { 'Content-Type': 'application/json' } }).then((res) => {
      if (res.status === 200) {
        getProfile()
      }
    })
  }

  const deleteTask = (selectedTask) => {
    fetch('https://different-lingerie-goat.cyclic.app/delete-task', { method: "POST", body: JSON.stringify(Object.assign({ selectedTask, id: user.id })), headers: { 'Content-Type': 'application/json' } }).then((res) => {
      if (res.status === 200) {
        getProfile()
      }
    })
  }

  const completeTask = (selectedTask) => {
    fetch('https://different-lingerie-goat.cyclic.app/complete-task', { method: "POST", body: JSON.stringify(Object.assign({ selectedTask, id: user.id })), headers: { 'Content-Type': 'application/json' } }).then((res) => {
      if (res.status === 200) {
        getProfile()
      }
    })
  }

  const logoutHandler = () => {
    localStorage.removeItem('auth_token')
    navigate('/')
  }

  // useMemo(()=>{
  //   console.log("cuuret value is " + JSON.stringify(task))
  // },[task])

  console.log(task)

  const getProfile = () => {
    let token = localStorage.getItem('auth_token')
    console.log(token)

    fetch('https://different-lingerie-goat.cyclic.app/user-profile', { method: "GET", headers: { "authorization": "Bearer " + token } }).then((res) => {
      return res.json()
    }).then((response) => {
      if (response.name === "TokenExpiredError") {
        navigate('/')
      } else {
        console.log(response)
        setUser(response)
        setProfileInfo(response)
      }

    })
  }

  useEffect(() => {
    let token = localStorage.getItem('auth_token')
    if (token) {
      getProfile()
    } else {
      navigate('/')
    }
    // eslint-disable-next-line 
  }, [])


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
            <button type='button' data-bs-toggle="modal" data-bs-target="#editProfile" onClick={()=>setProfileInfo(user)}>Edit Profle</button>
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
              <button data-bs-toggle="modal" data-bs-target="#completedTask">Completed Tasks</button>
            </div>
          </div>

        </div>
        <div className='task-container'>
          {user.task.map((element) => {
            return <div className='task'>
              <div className='date-time d-flex'>
                <h6>Date</h6>
                <span className='m-auto mx-2'>{element.date.slice(0, 24)}</span>
              </div>
              <div className='task-content'>
                <h5>{element.title}</h5>
                <span>{element.content}</span>
              </div>
              <div className='task-actions'>
                <button className='edit' data-bs-toggle="modal" data-bs-target="#editTask" onClick={() => editTaskValues(element)}>Edit</button>
                <button className='complete' onClick={() => completeTask(element)}>Completed</button>
                <button className='delete' onClick={() => deleteTask(element)}>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>

      {/* MODALS  */}

      {/* add task  */}

      <div className="modal fade" id="addTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Title </label>
                  <input type="text" className="form-control" value={task.title} onChange={onchangeHandler} name="title" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Task Content</label>
                  <textarea type="text" className="form-control" value={task.content} onChange={onchangeHandler} name="content" id="exampleInputPassword1" style={{ height: "100%" }} />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" >Close</button> */}
              <button type="button" onClick={onSubmitHandler} data-bs-dismiss="modal" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit task  */}

      <div className="modal fade" id="editTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Title </label>
                  <input type="text" className="form-control" value={editTask.title} onChange={onEditHandler} name="title" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Task Content</label>
                  <textarea type="text" className="form-control" value={editTask.content} onChange={onEditHandler} name="content" id="exampleInputPassword1" style={{ height: "100%" }} />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" >Close</button> */}
              <button type="button" onClick={onEditSubmitHandler} data-bs-dismiss="modal" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>


      {/* Completed task  */}

      <div className="modal " id="completedTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="outerModal modal-content">
            <div className="modal-header">
              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Task</h1> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='task-container'>
                {user.completed_task ?user.completed_task.map((element) => {
                  return <div className='task'>
                    <div className='date-time d-flex'>
                      <h6>Date</h6>
                      <span className='m-auto mx-2'>{element.date.slice(0, 24)}</span>
                    </div>
                    <div className='task-content'>
                      <h5>{element.title}</h5>
                      <span>{element.content}</span>
                    </div>
                    {/* <div className='task-actions'>
                      <button className='edit' data-bs-toggle="modal" data-bs-target="#editTask" onClick={() => editTaskValues(element)}>Edit</button>
                      <button className='complete' onClick={() => completeTask(element)}>Completed</button>
                      <button className='delete' onClick={() => deleteTask(element)}>Delete</button>
                    </div> */}
                  </div>
                }):""}
              </div>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" >Close</button>
              <button type="button" onClick={onEditSubmitHandler} data-bs-dismiss="modal" className="btn btn-primary">Save Changes</button>
            </div> */}
          </div>
        </div>
      </div>

          {/* Edit Profile  */}

          <div className="modal fade" id="editProfile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Fullname </label>
                  <input type="text" className="form-control" value={profileInfo.fullname } onChange={onchangeHandler2} name="fullname" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Email Address</label>
                  <input type="text" className="form-control" value={profileInfo.email} onChange={onchangeHandler2} name="email"  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" value={profileInfo.phone} onChange={onchangeHandler2} name="phone"  />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" >Close</button> */}
              <button type="button" onClick={updateProfile} data-bs-dismiss="modal" className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>

    </HomeStyled>
  )
}

export default Home