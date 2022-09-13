import React, { useContext, useState } from 'react'
import TodoList from './TodoList'
import TodoContext from '../context/TodoContext';
import Loading from './Loading';

function Content() {

  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState();

  console.log(title)

  const { addTodo } = useContext(TodoContext)
  const { todos } = useContext(TodoContext)
  const { editTodo } = useContext(TodoContext)
  const { loading } = useContext(TodoContext)

  function handleSubmit(e) {
    e.preventDefault();

    if (title.length < 3) {
      alert('Min. 3 character required.')
      return; 
    }

    if (edit) {
      editTodo({
        content: title,
        isCompleted: edit.isCompleted,
        id: edit.id

      })
      setEdit('')
    } else {
      addTodo(title);
    }

    setTitle('');
  }

  return (
    <section className='h-screen w-full dark:bg-slate-800 bg-text-white'>
      <div className='max-w-[600px] mx-auto md:py-16 py-4'>
        <form onSubmit={handleSubmit}>
          <input placeholder="What needs to be done?" value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-gray-300 py-4 px-2 outline-none shadow-md mb-4 dark:bg-gray-900 dark:text-white' />
        </form>
        {
          loading && <Loading />
        }
        {
          !loading && todos.length === 0 && <p className='dark:text-white'>There is nothing to show at the moment.</p>
        }
        {
          <TodoList setTitle={setTitle} setEdit={setEdit} />
        }
      </div>
    </section>
  )
}

export default Content