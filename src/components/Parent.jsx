import React from "react"
import Child from "./Child"


export default function Parent(props)  {
    return (
        <Child score={"2-3"} home={"spur"} away={"dwa"} data={renderTeam(props.data)}/>
        
    )
}

function renderTeam(name) {
    return (
        <>
    {name}
     </>   
    )
    
}