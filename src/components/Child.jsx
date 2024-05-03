import React from "react";

export default function Child (props){
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);

    return (
        <>
        <p>{props.home}</p>
        <p>{props.score}</p>
        <p>{props.away}</p>
        <p>{props.data}</p>
        <p>{doubled}</p>
        
        </>
    )
}