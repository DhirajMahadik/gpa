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
          <h3>Name</h3>
        </div>

        <div className='basic-info'>
          <div className='email'>
            <h3>Email</h3>
            <span>dhirajmahadik9221@gmail.com</span>
          </div>
          <div className='phone'>
            <h3>Phone</h3>
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
            <h1>Your Tasks</h1>
          </div>

        </div>
        <div className='task-container'>
          {arr.map((element)=>{
            return <div className='task'>
            <div className='date-time d-flex'> 
                <span className='m-auto'>01/03/2023</span>
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
    </HomeStyled>
  )
}

export default Home