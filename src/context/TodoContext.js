import React, { useState, createContext } from "react";
import axios from "axios";

const TodoContext = createContext();

const API = 'https://631da7ad789612cd07ae1857.mockapi.io/todos'

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([])
    console.log(todos);

    const getTodos = async () => {
        const response = await axios.get(`${API}`);
        setTodos(response.data)
    }

    const addTodo = async (newTodo) => {
        const response = await axios.post(`${API}`, {
            content: newTodo,
            isCompleted: true
        })
        setTodos([...todos, response.data])
    }

    const values = {
        todos,
        getTodos,
        addTodo
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext