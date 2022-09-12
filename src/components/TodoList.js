import React, { useContext, useEffect } from 'react'
import TodoContext from '../context/TodoContext'
import { BsCheck, BsCheck2All } from 'react-icons/bs'
import { MdEdit, MdDelete } from 'react-icons/md'

function TodoList({ setTitle, setEdit }) {

  const { getTodos } = useContext(TodoContext);
  const { todos } = useContext(TodoContext);
  const { deleteTodo } = useContext(TodoContext);
  const { completeTodo } = useContext(TodoContext);
  const { editTodo } = useContext(TodoContext);

  useEffect(() => {
    getTodos()
  }, [])

  function handleDelete(id) {
    deleteTodo(id)
  }

  function handleCheck(item) {
    completeTodo(item)
  }

  function handleEdit(item) {
    setTitle(item.content)
    editTodo(item)

    setEdit(item)
  }

  return (
    <ul>
      {
        todos.map((item) => (
          <li key={item.id} className={`bg-gray-200 border-2 my-2 py-2`}>
            <div className='flex items-center justify-between'>
              <button className='cursor-pointer hover:scale-110 mx-2' onClick={() => handleCheck(item)}>
                {item.isCompleted ? <BsCheck size={24} /> : <BsCheck2All size={24} className='text-red-400' />}
              </button>
              <label className={item.isCompleted ? '' : `line-through text-red-400`}>{item.content}</label>
              <div className='flex'>
                <button className='mx-2 hover:scale-110' onClick={() => handleEdit(item)}><MdEdit size={24} /></button>
                <button className='mx-2 hover:scale-110' onClick={() => handleDelete(item.id)}><MdDelete size={24} /></button>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList