"use client"
import store from ".";
import { Provider } from "react-redux";
export function MyReduxProvider({children}){
    return <Provider store={store}>{children} </Provider>
}

export default MyReduxProvider;