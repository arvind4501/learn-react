import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {

  const [list, setList] = useState([])

  let addtoList = (inputText) => {
    if (inputText.trim() !== '') {
      setList([...list, inputText])
    } else {
      alert('Please add some task')
    }
  }

  const deleteListItem = (key) => {
    let newlist = [...list]
    newlist.splice(key, 1)
    setList(newlist)
  }

  return (
    <>
      <TodoInput addtoList = {addtoList} />
        { list.map((listitem, i) => {
          return(
            <Todolist index = {i} key ={i} item = {listitem} deleteListItem= {deleteListItem} />
          )
        })}
    </>
  )
}

export default App
