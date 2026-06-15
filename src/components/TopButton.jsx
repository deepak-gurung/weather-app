import React from 'react'

const TopButton = () => {

    const cities = [
        {
            id: 1,
            title:"Kathmandu"
        },
        {
            id: 2,
            title:"Delhi"
        },
        {
            id: 3,
            title:"Tokyo"
        },
        {
            id: 4,
            title:"London"
        },
        {
            id: 5,
            title:"Sydney"
        },
    ]

  return (
    <div className='flex items-center justify-center gap-8 py-8'>
        {cities.map((city)=>(
            <button key={city.id} className='text-white font-semibold text-xl cursor-pointer'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButton