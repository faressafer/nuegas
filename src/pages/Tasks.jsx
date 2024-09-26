import React from 'react'
import TimeLimit from '../SmallComp/TimeLimit'
import NewTask from '../SmallComp/NewTask'
import NavBar from '../components/NavBar'

const Tasks = () => {
  return (
    <div className='bg-[#FAFAFA] min-h-screen'>
      <NavBar/>
      <TimeLimit/>
      <NewTask/>
    </div>
  )
}

export default Tasks