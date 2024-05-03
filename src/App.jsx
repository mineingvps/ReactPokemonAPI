import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'
import Parent from './components/Parent'
import Pokedex from './Pokedex'
import Home from './Home'
import axios from "axios";
import React from "react";
import { BrowserRouter as Router , Routes , Route , Link, redirect } from 'react-router-dom'
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export default function App() {
  
 


  
let arr = ["manu" , "DD" , "ff"]
const [count , setCount] = useState(1)

const [text , setText] = useState("")

function plus(){
  setCount(count + 1)
}

function minus(){
  setCount(count - 1)
}








  return (
    <>
    {/* <b>count : {count}</b>
     <button onClick={plus}>Plus</button> 
     <button onClick={minus}>Minus</button> <br/> */}
    <Router>
      {/* <nav>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/pokedex/ditto">ditto</Link>
      </nav> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokedex/:pokeName' element={<Pokedex />} />

      </Routes>
    </Router>

     {/* <Parent data={arr}/> */}
     <br/>
     <pos4>
     <select id="dropdown" onChange={(e) => setText(e.target.value) }>
        <option value="">อยากได้ตัวไหนเลือกเลย</option>
        <option value="venusaur">venusaur</option>
        <option value="rattata">rattata</option>
        <option value="caterpie">caterpie</option>
        <option value="metapod">metapod</option>
        <option value="blastoise">blastoise</option>
        <option value="squirtle">squirtle</option>
        <option value="ivysaur">ivysaur</option>
        <option value="weedle">weedle</option>
    </select>
     <br/>
     <input type='text' value={text}
        onChange={(e) => setText(e.target.value) } ></input>
     <br/>
     <b>text : {text}</b>
      &nbsp;<a href={`http://localhost:5173/pokedex/${text}`}>ค้นหาโปเกม่อน</a>
      <br/>
      โปเกม่อนเพิ่มเติม <br/>
      <a href='https://pokeapi.co/api/v2/pokemon/?offset=1000&limit=1000' target='_blank'>คลิก</a>

      </pos4>
      
    <br/>
     {/* https://pokeapi.co/api/v2/berry/ */}
     <br/>
      
    
    </>
  )
}

