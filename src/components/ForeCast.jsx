import React from 'react'

const ForeCast = ({title}) => {
  return (
    <div className='flex flex-col items-center text-white text-sm mt-2'>
        <h1>{title}</h1>
        <hr className='border w-[500px] mt-2' />
        <div className='flex flex-row gap-10'>
            <div className='flex flex-col items-center mt-2'>
            <p>04:30 PM</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-10' />
            <p>22°</p>
        </div>
        <div className='flex flex-col items-center mt-2'>
            <p>04:30 PM</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-10' />
            <p>22°</p>
        </div>
        <div className='flex flex-col items-center mt-2'>
            <p>04:30 PM</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-10' />
            <p>22°</p>
        </div>
        <div className='flex flex-col items-center mt-2'>
            <p>04:30 PM</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-10' />
            <p>22°</p>
        </div>
        <div className='flex flex-col items-center mt-2'>
            <p>04:30 PM</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-10' />
            <p>22°</p>
        </div>
        </div>
        
    </div>
  )
}

export default ForeCast