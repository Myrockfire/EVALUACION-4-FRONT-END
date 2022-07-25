import React, {useEffect, useState} from "react"

const PokemonFragment = ({imagen,titulo,descripcion,temperamento,color}) => {
    if (color == "verde") {
        color = "alert-success"
    } else {
        if (color =="amarillo") {
            color = "alert-warning"
        } else {
            if (color =="rojo"){
                color = "alert-danger"
            }

        }
    }
    return(
        <>
        <div className="card" style={{width:"18rmm"}}>
                <img src={imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descripcion}</p>
                    </div>
                    <div className={`alert ${color}`} role="alert">
                    <p className="card-text">{temperamento}</p>
                    </div>   
            </div>
        </>
    )
}


export default PokemonFragment;