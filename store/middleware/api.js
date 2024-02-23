import { apiCallBegan } from "../api";
const api = ({dispatch}) => (next) => async(action) =>{
    if(action.type !== apiCallBegan.type) return next(action);

   // onStart, onSuccess, onError 모두 action
    const {url, method, data, onStart, onSuccess, onError} = action.payload;
    console.log(data)
    if(onStart) dispatch({type: onStart})

    try{
        const response = await fetch( url, (method !== "GET") ? {
                method: method,
                data: data?.data,
            }: {} )
        const res = await response.json();
        console.log(res);
        dispatch({type: onSuccess, payload: res })    
    } catch (error){
        dispatch({type: onError, payload: { error: error.message }});
        dispatch({type: "SHOW_ERROR", payload: { error: error.message }});
    }
};

export default api;