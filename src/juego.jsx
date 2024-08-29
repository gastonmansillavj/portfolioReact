import React from 'react'

export const Juego = (props) => {
const handleClick=()=>{
  window.location.href=props.link
}

  return (
    <div className='juego-container'>
      <h2>{props.name}</h2>
      <img src={props.imagen} alt="Juego 1" className= "juego-imagen" onClick={handleClick} />
     
    </div>
  )
}


