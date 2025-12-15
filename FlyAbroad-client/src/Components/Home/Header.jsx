import React from 'react'

const Header = () => {
  return (
    <div id='home-header' className='lg:px-15 md:px-10 px-7 py-5'>
      <div className='flex justify-between lg:flex-row md:flex-row flex-col w-full h-full'>
        <div className='w-auto h-auto'>
          <div className='bg-white rounded-md w-fit px-4 py-1 mt-25'>
            <p>Never stop learning</p>
          </div>
          <div className='lg:w-150 md:w-90 w-auto mt-4'>
            <h1 className='lg:text-6xl text-4xl font-bold text-[#09585e]'>Grow up your skills by online courses with FlyAbroad</h1>
          </div>
        </div>
        <div className='w-auto h-auto'>
          <img src="./src/assets/student.png" className='lg:mr-15 md:mr-15 m-auto -mb-5 lg:w-100 w-80' alt="student" />
        </div>
      </div>
    </div>
  )
}

export default Header;