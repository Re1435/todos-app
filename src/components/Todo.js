import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Todo = ({todo,toggleComplete,deleteTask,editTodo}) => {
  return (
    <div className='Todo'>
        <p className={`${todo.completed ? 'completed' : ''}`} onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
        <div>
            <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => editTodo(todo.id)}/>
            <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deleteTask(todo.id)}/>
        </div>
    </div>
  )
}

export default Todo