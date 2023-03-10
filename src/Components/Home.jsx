import React from 'react'
import { HomeStyled } from '../StyledComponents/HomeStyled'
import { PersonCircle } from 'react-bootstrap-icons'


const Home = () => {

  // (function(){
  //   debugger;
  // })()

  let arr = [1,1,1,1,1,1,1,1,1,1]

  return (
    <HomeStyled>
      <div className='profile-info'>
        <div className='heading'>
          <h2>Profile</h2>
        </div>
        <div className='profile-icon'>
          <PersonCircle />
          <h4>Name</h4>
        </div>

        <div className='basic-info'>
          <div className='email'>
            <h4>Email</h4>
            <span>dhirajmahadik9221@gmail.com</span>
          </div>
          <div className='phone'>
            <h4>Phone</h4>
            <span>9130147964</span>
          </div>

        </div>
        <div className='actions'>
          <div className='edit-profile'>
            <button type='button'>Edit Profle</button>
          </div>
          

        </div>
        <div className='logout'>
            <button type='button'>Logout</button>
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
          {arr.map((element)=>{
            return <div className='task'>
            <div className='date-time d-flex'> 
                <span className='m-auto mx-2'>01/03/2023</span>
            </div>
            <div className='task-content'>
              <p>Because max() is a static method of Math, you always use it as Math.max(), rather than as a method of a Math object you created (Math is not a constructor).</p>
            </div>
            <div className='task-actions'>
                <button>Edit</button>
                <button>Completed</button>
                <button>Delete</button>
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
      <form action="">
        <div className='col-md-6'>
          <label htmlFor="task">Task Content</label>
          <textarea type="text" id='task' />
        </div>
       
      </form>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" >Close</button> */}
        <button type="button" data-bs-dismiss="modal" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          

    </HomeStyled>
  )
}

export default Home