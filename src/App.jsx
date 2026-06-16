import React from 'react'
import TopButton from './components/TopButton'
import InputField from './components/InputField'
import TimeAndLocation from './components/TimeAndLocation'

const App = () => {
  return (
    <div className='h-screen bg-gradient-to-br from-cyan-700 to-blue-700'>
      <TopButton />
      <InputField />
      <TimeAndLocation />
    </div>
  )
}

export default App