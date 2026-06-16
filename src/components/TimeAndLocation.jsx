import React from 'react'

const TimeAndLocation = () => {
  return (
    <div className='flex flex-col items-center gap-3 mt-4 text-white'>
        <div className='flex justify-center gap-3'>
             <p>Tuesday,31 may 2026</p>
        <span>|</span>
        <p>Local time: 08:25 AM</p>
        </div>
        <h1 className='font-semibold'>Kathmandu, NP</h1>
       
    </div>
  )
}

export default TimeAndLocation