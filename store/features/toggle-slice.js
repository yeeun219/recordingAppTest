import {createSlice} from "@reduxjs/toolkit";


const initialState={
    value:{
        isToggle: true,
    },
};

export const toggle = createSlice({
    name: "toggle",
    initialState,
    reducers:{
        setToggle: (state) =>{
            return {
                value:{
                    isToggle: !state.value.isToggle,
                },
            }
        },
    }
});

export const {setToggle} = toggle.actions;
export default toggle.reducer;