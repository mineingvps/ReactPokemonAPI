import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchPokemon } from "./api/fetchPokemon";
import ShowPoke1 from "./ShowPoke1";
import ShowPoke2 from "./ShowPoke2";
function Pokedex() {
const {pokeName} = useParams();
const [pokeDex , setPokeDex] = useState(undefined);
useEffect(()=>{
    // fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    // .then((res)=>res.json())
    // .then((data)=>{
    //     console.log(data);
    //     setPokeDex({
    //         name: data?.name,
    //         height: data?.height,
    //     });
    // })
    // .catch((err) => setPokeDex(undefined));

    fetchData();
    return () => {};
}, []);

const fetchData = async () => {
    let pokemonData = await fetchPokemon(pokeName);
    if (pokemonData != undefined) {
        console.log("pokemonData != undefined" , pokemonData );
        setPokeDex( {
                name: pokemonData?.name,
                height: pokemonData?.height,
                img1: pokemonData?.sprites.other.showdown.back_default,
                img2: pokemonData?.sprites.other.showdown.front_default,
                hp: pokemonData?.stats[0].base_stat ,
                atk : pokemonData?.stats[1].base_stat,
                skill : pokemonData?.abilities,
        }) 
    } else {
        setPokeDex(undefined)
    }
}




return (
    <div>
        {pokeDex != undefined ? (
            <>
            {/* <b>name: {pokeDex?.name}</b>&nbsp;<b>height: {pokeDex?.height}</b><br/> */}
            {/* <img src={pokeDex?.img1} width={300}></img> */}
            <ShowPoke1 img={pokeDex?.img1} name={pokeDex?.name} 
            hp={pokeDex.hp} atk={pokeDex.atk} skill={pokeDex.skill}
            height={pokeDex.height}/>
           
            
            </>
        ) : (
            <>
            <b style={{color : "red"}}>not found pokemon!!!</b>
            </>
        )
        }
       
    </div>
)

}
export default Pokedex