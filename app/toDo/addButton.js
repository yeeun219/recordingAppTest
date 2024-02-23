"use client";
import { useRef, useTransition } from "react";
import { useTodoContext } from "./page";
// import AddTodo from "./addTodo";


// async function addTodo(data) {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     // const todo = data.get("todo");
//     console.log("add to do server action");
//     todos.push(data);
// }


export default function AddButton() {
    const [isPending, startTransition] = useTransition();
    const {todos, updateMyTodos} = useTodoContext();  
    const todoRef = useRef(null);

   return (
    <>
        <input 
            ref={todoRef}
            type="text"
            name="todo"
            className="h-[48px] border-[1px] border-gray-40 rounded-[4px] px-[16px] outline-none placeholder:text-gray-60 placeholder:text-[14px]"
        />
        <button
            disabled={isPending}
            className="bg-[#00CCAA] text-white rounded-[6px] px-4 py-3 disabled:bg-[#d1d5db]"
            onClick={async () => {
                startTransition(async () => {
                    await updateMyTodos(todoRef.current?.value);
                });
            }}
        >
            Add Todo
        </button>
    </>
  );
}
