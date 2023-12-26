import React, {useState} from 'react'

function TodoInput(props) {

  const [todo, setTodo] = useState('')

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      props.addtoList(todo);
      setTodo('');
    }
  };


  return (
    <>
      <h1>Add to Todo list</h1>
      <input type="text" className='' value={todo} onChange={(e) => setTodo(e.target.value) } onKeyPress={handleKeyPress} />
      <button onClick={() => {props.addtoList(todo); setTodo(''); }} >+</button>
    </>
  )
}

export default TodoInput