import React, { useContext, useState } from 'react'
import TodoList from './TodoList'
import TodoContext from '../context/TodoContext';
import Loading from './Loading';

function Content() {

  const [title, setTitle] = useState('');

  const { addTodo } = useContext(TodoContext)
  const { todos } = useContext(TodoContext)

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  }

  return (
    <section className='max-w-[600px] mx-auto my-10'>
      <form onSubmit={handleSubmit}>
        <input placeholder="What needs to be done?" value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-gray-200 py-4 px-2 outline-none shadow-md mb-4' />
      </form>
      {
        todos.length === 0 && <Loading />
      }
      {
        <TodoList />
      }
    </section>
  )
}

export default Content