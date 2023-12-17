import { useState } from 'react'
import './App.css'

// let counter = 15



function App() {
  const [counter, setCount] = useState(0)

  const addValue = () => {
    setCount((prevcounter) => prevcounter + 1)
    setCount((prevcounter) => prevcounter + 1)
  }
  function removeValue(){
    setCount(counter - 1)
  }

  return (
    <>
    <h1>Counter App</h1>
      <h1>Value of counter:- {counter} </h1>
      <h2>{counter}</h2>
      <button onClick={addValue} >Increase counter</button>
      <button onClick={removeValue} >Decrease counter</button>
    </>
  )
}

export default App
