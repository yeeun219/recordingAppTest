"use client";
import { createContext, useContext, useState, useRef, useTransition } from "react";
import addTodo from "./addTodo";
import TodoList from "./todoList";
import AddButton from "./addButton";

const TodoContext = createContext();

const TodoProvider = ({children}) =>{
    const [todos, setTodo] = useState(["Learn React"]);
    const updateMyTodos = async(newValue) =>{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const new_todos = [...todos,newValue];
        console.log(new_todos);
        setTodo(new_todos);
    };
    return (
        <TodoContext.Provider value={{todos, updateMyTodos}}>
            {children}
        </TodoContext.Provider>
    );
};

//context를 구독하기 위함
export const useTodoContext = () =>{
    return useContext(TodoContext);
};

export default function Home() {    
   return (
        <main className="p-5">
        <h1 className="text-4xl font-bold mb-4">Todos</h1>
        <TodoProvider>
            <TodoList/>
            <AddButton/>
        </TodoProvider>
    </main>
  );
}
