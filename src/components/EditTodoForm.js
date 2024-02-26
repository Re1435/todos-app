import React,{useState} from 'react'
import '../App.css'

const EditTodoForm = ({todo,editTask}) => {
  const [value,setValue] = useState(todo.task)

  const handleSubmit = e => {
    e.preventDefault()
    editTask(value,todo.id)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" placeholder='Update Task' className='todo-input' value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm