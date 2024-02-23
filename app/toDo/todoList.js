import { useTodoContext } from "./page"

export default function TodoList(){
    const {todos, updateMyTodos} = useTodoContext();   
    console.log(todos);
    return(
        <>
            <ul className="mb-4">
                {todos?.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>        
    )
}