'use client'
import { forwardRef, useImperativeHandle, useRef, useState,} from "react";

function withLoginComponent (Component){
    return function(props){
        const {loginRequired, ...restProps} = props

        if(loginRequired){
            return <>로그인이 필요합니다.</>
        }
        return <Component {...restProps} />
    }
}

const MyHigherComponent = withLoginComponent((props)=>{
    return <h3>{props.value}</h3>
})

const useMyHook =((value)=>{
    let a = 20;
    console.log("before a ",a)
    a= value;
    
    return a
})
export default function myCallBackExample(){    
    const isLogin = false
    const a= useMyHook(40)
    console.log("after a ",a)
    console.log(a)
    return (
        <>
        <MyHigherComponent value="text" loginRequired={isLogin}/>
        {/* <HigherComponent value="text" loginRequired={false}/> */}
        </>
    )
    
} 