import React from 'react'
import { TextoSobreNosotros } from './TextoSobreNosotros'
import { ImagenSobreNosotros } from './ImagenSobreNosotros'


export const SobreNosotros = (props) => {

  

  return (
    <div  className="container-sobre-nosotros">  

     
      <ImagenSobreNosotros imagen={props.imagen}/>
      <TextoSobreNosotros texto={props.texto}/>
      

    </div>
  )
}


