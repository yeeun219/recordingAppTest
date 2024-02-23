"use client"
import { getTasks, addTask, removeTask, completedTask, addNewTask } from "../../store/features/tasks-slice";
import { addEmployee } from "../../store/features/employee-slice";
import store from "../../store";
import { fetchTasks } from "../../store/features/tasks-slice";
import { useDispatch } from "react-redux";
import { loadTasks } from "../../store/features/tasks-slice";

const Home=() => {
  // const res = await fetch("http://localhost:5000/api/tasks");
  // const data = await res.json();
  //console.log(fetchTasks());
  const dispatch = useDispatch();
  // dispatch(fetchTasks);
  const handleGetTask= () =>{
    //dispatch(fetchTasks());
    // dispatch({
    //   type: "apiRequest",
    //   payload:{
    //     url: "http://localhost:5000/api/tasks",
    //     method: "GET",
    //     onStart: "tasks/apiRequested",
    //     onSuccess: "tasks/getTasks",
    //     onError: "tasks/apiRequestFailed",
    //   }
    // })
    dispatch(loadTasks());
  }
  const handleAddTask= () =>{
    dispatch(addNewTask({task:"This is new task"}));
  }
  //store.dispatch(getTasks(fetchTasks()))
  // store.dispatch(getTasks({tasks: res.data}))
  // const dispatch= useDispatch();
  // dispatch(addEmployee({ name: "Harley" }));
  // const employee = useSelector(({employeeSlice}) => employeeSlice);
  // console.log(employee);
  return (
    <div>
      <button
          className='px-3 py-2 bg-blue-600 text-sm text-white rounded-full'
          onClick={handleGetTask}
        >
          getTask
        </button>

        <button
          className='px-3 py-2 bg-blue-600 text-sm text-white rounded-full'
          onClick={handleAddTask}
        >
          addTask
        </button>

    </div>
  );
  }
  
export default Home;