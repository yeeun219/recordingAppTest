'use client'
import React, {useEffect} from 'react';
import ReactDOMServer from 'react-dom/server'

function ChildrenComponent({fruits}) {
    useEffect(()=>{
        console.log(fruits)
    },[fruits])
    function handleClick(){
        console.log('hello')
    }

    return (   
        <ul>
            {fruits.map((fruit)=>(
                <li key={fruit} onClick={handleClick}>
                    {fruit}
                </li>
            ))}
        </ul>
      
    )
}

function SampleComponent(){
    return (
        <>
        <div>hello </div>
        <ChildrenComponent fruits={['apple','bannana','peach']}/>
        </>
    )
}

export default function myApp(){
    console.log("Aaaaa")
    const result = ReactDOMServer.renderToString( 
        React.createElement('div', {id:'root'}, <SampleComponent/>),
    )
    console.log(result);
    return result;    
}

