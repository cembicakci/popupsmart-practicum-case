import React, { createContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({children}) => {



    const values = {

    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext