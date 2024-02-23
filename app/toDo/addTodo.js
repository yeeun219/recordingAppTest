"use server"

import { revalidatePath, revalidateTag } from "next/cache";
import { useTodoContext } from "./page";

export default async function AddTodo(data) {
    "use server";
    const {todos, updateMyTodos} = useTodoContext();  
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // const todo = data.get("todo");
    console.log("add to do server action")
    todos.push(data);
    revalidateTag('todo')
    return todos;
}
