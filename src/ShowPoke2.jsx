function ShowPoke2(props){
   
    let show = props.show

    if (show == true) {

    return (
        <>
            <pos2>
            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif"} width={100}/>
            </pos2>

            <pos3>
            <div className="box1">
            <b><p >Name : venusaur</p></b>
            <b><p >HP : 55</p></b>
            <b><p >ATK : 9999999</p></b>
            <b >SKILL : [overgrow] [chlorophyll] </b>
            
            

            </div>
            </pos3>
        </>
    )
}
}

export default ShowPoke2