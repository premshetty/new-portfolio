import React from 'react'

const page = () => {
  return (
    <div>
      <div className='h-[100vh] bg-blue-300 flex justify-center items-center snap-container'>
        <div className='m-auto h-1/2  p-10 bg-white w-1/2'>
          <div className='snap-element'> name</div>
        </div>
      </div>
      <div className='h-[100vh] bg-blue-400 flex justify-center items-center snap-container'>
        <div className='m-auto h-1/2  p-10 bg-white w-1/2'>
          <div className='snap-element'> name</div>
        </div>
      </div>
      <div className='h-[100vh] bg-blue-500 flex justify-center items-center snap-container'>
        <div className='m-auto h-1/2  p-10 bg-white w-1/2'>
          <div className='snap-element'> name</div>
        </div>
      </div>
    </div>
  )
}

export default page