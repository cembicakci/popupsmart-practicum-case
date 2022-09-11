import React, { useContext, useEffect } from 'react'
import TodoContext from '../context/TodoContext'
import { BsCheck, BsCheck2All } from 'react-icons/bs'
import { MdEdit, MdDelete } from 'react-icons/md'

function TodoList() {

  const { getTodos } = useContext(TodoContext);
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <ul>
      {
        todos.map((item) => (
          <li key={item.id} className={`bg-gray-200 border-2 my-2 py-2`}>
            <div className='flex items-center justify-between'>
              <button className='cursor-pointer hover:scale-110 mx-2'>
                {item.isCompleted ? <BsCheck size={24} /> : <BsCheck2All size={24} className='' />}
              </button>
              <label className={item.isCompleted ? '' : `line-through`}>{item.content}</label>
              <div className='flex'>
                <button className='mx-2 hover:scale-110'><MdEdit size={24} /></button>
                <button className='mx-2 hover:scale-110'><MdDelete size={24} /></button>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList