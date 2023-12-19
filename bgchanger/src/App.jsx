import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen duration-200 bg-black'>
      <div className='fixed flex flex-wrap justify-center botton-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className=''>test</button>
        
        </div>
      </div>
    </div>
  )
}

export default App
