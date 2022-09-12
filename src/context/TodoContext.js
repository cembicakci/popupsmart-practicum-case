import React, { useState, createContext } from "react";
import axios from "axios";

const TodoContext = createContext();

const API = 'https://631da7ad789612cd07ae1857.mockapi.io/todos'

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    const getTodos = async () => {
        const response = await axios.get(`${API}`);
        setTodos(response.data)
        setLoading(false)
    }

    const addTodo = async (newTodo) => {
        const response = await axios.post(`${API}`, {
            content: newTodo,
            isCompleted: true
        })
        setTodos([...todos, response.data])
    }

    const deleteTodo = async (id) => {
        const response = await axios.delete(`${API}/${id}`)
        getTodos();
        return response;
    }

    const completeTodo = async (item) => {
        const { response } = await axios.put(`${API}/${item.id}`, {
            content: item.content,
            isCompleted: !item.isCompleted
        })
        getTodos();
        return response;
    }

    const editTodo = async (edit) => {
        const { response } = await axios.put(`${API}/${edit.id}`, {
            content: edit.content,
            isCompleted: edit.isCompleted
        })
        getTodos();
    
        
    }

    const values = {
        todos,
        loading,
        getTodos,
        addTodo,
        deleteTodo,
        completeTodo,
        editTodo
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext