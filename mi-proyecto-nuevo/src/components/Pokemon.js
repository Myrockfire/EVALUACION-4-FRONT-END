import React, {useEffect, useState} from "react"
import Pidgeotto from "../assets/images/pokemon-pidgeotto.jpg"
import Nidoran from "../assets/images/pokemon2-nidoran-f.jpg"
import Cubone from "../assets/images/pokemon3-cubone.jpg"
import PokemonFragment from "./Fragments/pokemonFragments"
import CssFragmentTitulo from "./Fragments/cssFragment"


const Pokemon = () =>{
    
    return (
    <>
    <CssFragmentTitulo
    colorGrad1="#BCF5A9"
    colorGrad2="#01BF74"
    colorTitulo="white"
    />
    <div  className="container">
   
        <div className="row">
            <div className="col-12">

            </div>

        </div>
        <div className="row">
            <div className="col-4">Pokemon 1
                <PokemonFragment
                imagen={Pidgeotto} 
                titulo="Pidgeotto"
                descripcion="Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder."
                temperamento="Pokemon Medianamente Agresivo"
                /* Color segun la agresividad del pokemon: verde, amarillo, rojo */
                color="amarillo"
                />
            </div>
            <div className="col-4">Pokemon 2
                <PokemonFragment
                imagen={Nidoran}
                titulo="Nidoran-fm"
                descripcion="Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns."
                temperamento="Pokemon No Agresivo"
                color="verde"
                />
            </div>
            <div className="col-4">Pokemon 3
                <PokemonFragment
                imagen={Cubone}
                titulo="Cubone"
                descripcion="Because it never removes its skull helmet, no one has ever seen this POKéMON’s real face."
                temperamento="Pokemon Altamente Agresivo"
                color="rojo"
                />

            </div>
            
        </div>
    </div>
    </>
    )
}

export default Pokemon;