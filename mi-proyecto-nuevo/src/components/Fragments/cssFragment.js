import React, {useEffect, useState} from "react"

const CssFragmentTitulo = ({colorGrad1,colorGrad2, colorTitulo}) =>{

    return(
        <>
        <div style={{width:"100%", background:`linear-gradient(${colorGrad1}, ${colorGrad2})`}}>
        <h1 style={{color:`${colorTitulo}` , textAlign:"center"}}>
            POKEMON
        </h1>
        </div>
        
        </>
    )
}

export default CssFragmentTitulo; 
