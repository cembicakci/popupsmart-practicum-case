import React, { useContext, useState } from 'react'
import TodoList from './TodoList'
import TodoContext from '../context/TodoContext';
import Loading from './Loading';

function Content() {

  const [title, setTitle] = useState('');
  const [edit, setEdit] = useState();

  const { addTodo } = useContext(TodoContext)
  const { todos } = useContext(TodoContext)
  const { editTodo } = useContext(TodoContext)
  const { loading } = useContext(TodoContext)

  function handleSubmit(e) {
    e.preventDefault();

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
    <section className='max-w-[600px] mx-auto my-10'>
      <form onSubmit={handleSubmit}>
        <input placeholder="What needs to be done?" value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-gray-200 py-4 px-2 outline-none shadow-md mb-4' />
      </form>
      {
        loading && <Loading />
      }
      {
        !loading && todos.length === 0 && <p>There is nothing to show at the moment.</p>
      }
      {
        <TodoList setTitle={setTitle} setEdit={setEdit} />
      }
    </section>
  )
}

export default Content