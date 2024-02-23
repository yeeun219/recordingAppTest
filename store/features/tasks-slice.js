import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
// import axios from "../utils/http";
let id = 0;
const initialState = {
    tasks: [],
    loading: false,
    error: null,
    sentence_num: 0,
};

// export const fetchTasks = createAsyncThunk(
//     "fetchTasks",
//     async (a, { rejectWithValue }) => {
//         try {
//             const response = await axios.get("/tasks");
//             return { tasks: response.data };
//         } catch (error) {
//             return rejectWithValue({ error: error.message });
//         }
//     }
// );

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async(a, {rejectWithValue}) =>{
    try{

        const res = await fetch("http://localhost:3000/api/taskss");
        const data = await res.json();
        return { tasks: data};   
    } catch(error){
        return rejectWithValue({error: error.message});
    }
})
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        startGetDataThroughSaga: ( state, action) =>{
            state.sentence_num = action.payload.num;
            console.log(action.payload.num);
        },
        //redux saga 통해서 set
        setDataThroughSaga: (state, action) =>{
            //console.log("action.payload:",action.payload);
            state.tasks = action.payload;
            //console.log("state.tasks",state.tasks)
        },
        apiErrorThroughSaga: (state, action)=>{
            state.error = action.payload;
        },
        // action: function
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestFailed: (state, action) => {
            state.loading = false;
        },
        getTasks: (state, action) => {
            console.log(action.payload);
            state.tasks = action.payload;
            state.loading = false;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks.splice(index, 1);
        },
        completedTask: (state, action) => {
            const index = state.tasks.findIndex(
                (task) => task.id === action.payload.id
            );
            state.tasks[index].completed = action.payload.completed;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) =>{
            state.loading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action)=>{
            state.tasks = action.payload.tasks;
            console.log("payload")
            state.loading = false;
        });
        builder.addCase(fetchTasks.rejected, (state, action)=>{
            console.log(action.payload)
            state.error = action.payload.error;
            state.loading = false;
        })
        
    }
    // extraReducers: {
    //     [fetchTasks.pending]: (state, action) => {
    //         state.loading = true;
    //     },

    //     [fetchTasks.fulfilled]: (state, action) => {
    //         state.tasks = action.payload.tasks;
    //         state.loading = false;
    //     },

    //     [fetchTasks.rejected]: (state, action) => {
    //         state.error = action.payload.error;
    //         state.loading = false;
    //     },
    // },
});

export const {
    apiRequested,
    apiRequestFailed,
    getTasks,
    addTask,
    removeTask,
    completedTask,
    setDataThroughSaga,
    apiErrorThroughSaga,
    startGetDataThroughSaga,
} = taskSlice.actions;
export default taskSlice.reducer;

// Action Creators
// const url = "/tasks";
const url ="http://localhost:5000/api/tasks";
export const loadTasks = () =>
    apiCallBegan({
        url,
        onStart: apiRequested.type,
        onSuccess: getTasks.type,
        onError: apiRequestFailed.type,
    });

export const addNewTask = (task) =>    
    
    apiCallBegan({
        url,
        method: "POST",
        data: task,
        onStart: apiRequested.type,
        onSuccess: addTask.type,
        onError: apiRequestFailed.type,
    })

// export const addNewTask = (task) =>
//     apiCallBegan({
//         url,
//         method: "POST",
//         data: task,
//         onSuccess: addTask.type,
//     });

// export const updateCompleted = (task) =>
//     apiCallBegan({
//         // /tasks/6
//         url: `${url}/${task.id}`,
//         method: "PATCH",
//         data: task,
//         onSuccess: completedTask.type,
//     });

// export const deleteTask = (task) =>
//     apiCallBegan({
//         // /tasks/6
//         url: `${url}/${task.id}`,
//         method: "DELETE",
//         onSuccess: removeTask.type,
//     });
