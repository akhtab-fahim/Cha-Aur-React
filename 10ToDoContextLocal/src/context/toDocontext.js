import React, { createContext, useContext } from "react";

export const ToDoContext = createContext({
    // properties
    todos : [{ 
        id:1,
        todo: "To Do Msg",
        completed: false,

    }],
    // functions
    addTodo : (todo) =>{},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id)=>{},

})

export const useTodo = ()=>{
    return useContext(ToDoContext)
}

//provider
export const Todoprovider = ToDoContext.Provider