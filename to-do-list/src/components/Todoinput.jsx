import React, {useState} from 'react'

function TodoInput(props) {

  const [todo, setTodo] = useState('')

  console.log(todo);

  return (
    <>
      <h1>Add to Todo list</h1>
      <input type="text" className='' value={todo} onChange={(e) => setTodo(e.target.value) } />
      <button onClick={() => {props.addtoList(todo); setTodo('') }} >+</button>
    </>
  )
}

export default TodoInput