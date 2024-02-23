const initialState = { 
    user: null,
    isLoggingIn: false,
    isLoggedIn: false,
    logInErrorReason: "",
};

const loginSlice = createSlice({
    name: "login", 
    initialState,
    reducers: {
        loginRequest: (state, action)=>{
            state.isLoggingIn = true;
        },
        loginSuccess: (state, action) =>{
            state.user = action.payload.user;
            state.isLoggingIn = true;
        },
        loginFail: (state, action) => {
            state.logInErrorReason = action.payload.error;
        },
    },
})

export const {
    loginRequest,
    loginSuccess,
    loginFail
} = loginSlice.actions;

export default loginSlice.reducer;