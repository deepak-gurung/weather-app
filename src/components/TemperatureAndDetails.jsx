import React from 'react'
import { FaWind } from 'react-icons/fa'
import { TbTemperature } from 'react-icons/tb'
import { WiHumidity } from 'react-icons/wi'

const TemperatureAndDetails = () => {
  return (
    <div className='flex flex-col items-center gap-3 text-white py-4'>
        <h1>Clouds</h1>
        <div className='flex items-center gap-40'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <h1 className='text-6xl'>21°</h1>
            <div className='flex flex-col text-[13px]'>
                <div className='flex items-center gap-1'>
                    <TbTemperature />
                    <p>Real fell:
                    <span> 32°</span>
                    </p>
                </div>
                <div className='flex items-center gap-1'>
                    <WiHumidity />
                    <p>Humidity:
                    <span> 78%</span>
                    </p>
                </div>
                <div className='flex items-center gap-1'>
                    <FaWind />
                    <p>Wind:
                    <span> 5 km/h</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails