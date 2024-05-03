import { useState } from "react";
import ShowPoke2 from "./ShowPoke2";

var hp
function ShowPoke1(props){
    const [check1 , setCheck1] = useState(true);
    const [check2 , setCheck2] = useState(true);
    hp = props.atk

    function atk(){
        if(hp >= 55) {
            alert ("ชนะ คุณเปิดก่อนได้เปรียบ ฝ่ายตรงข้ามได้หลับในการโจมตีแรก")
            setCheck1(false)
            
           
        } else {
            alert ("แพ้คับ โจมตีคุณน้อยไป เลยโดนฝ่ายตรงข้ามตีทีเดียวหลับเลย")
            setCheck2(false)
        }
    }

    if(check2 == true) {
    return (
        <>
            <pos1>
            <img src={props.img} width={props.height * 10}/>
            <p style={{color:"red"}}> <b>ตัวนี้เริ่มโจมตีก่อน</b></p>
            </pos1>
            <div className="box1">
            <b><p >Name : {props.name}</p></b>
            <b><p >HP : {props.hp}</p></b>
            <b><p >ATK : {props.atk}</p></b>
            <b >SKILL : 
            
            {props.skill.map((item, index) => (
        <b key={index}> [{item.ability.name}] </b>
      ))}</b>
        <button style={{color : "red" , position : "absolute" , left : "500px", backgroundColor : "black"}} onClick={atk}>ต่อสู้</button>
            </div>
       
            {check1 == true ? <ShowPoke2 show={true}/> : <ShowPoke2 show={false}/>}
            
            
        </>
    )

} 
if(check2 == false){
    return (
        <ShowPoke2 show={true}/>
    )
}
}



export default ShowPoke1