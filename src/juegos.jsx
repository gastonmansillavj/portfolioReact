import React from 'react'
import { Juego } from './juego'
import { SobreNosotros } from './sobreNosotros'

export const Juegos = () => {
  return (
    <div className="grupo-juegos">
      <Juego name= "Agente Cov" 
      link = "https://gastonmansillavj.github.io/proyectoPersonalAgentecov/" 
      imagen="agenteCov.PNG"/>

      <Juego name= "Recuperadores"
       link = "https://gastonmansillavj.github.io/juegoreciclaje2/"
       imagen="recuperadores.PNG"/>   

      <Juego name= "Crazy paradox" 
      link = "https://gastonmansillavj.itch.io/crazy-paradox"
      imagen="crazyparadox.png"/> 

      <Juego name= "Ridle Ball" 
      link = "https://drive.google.com/file/d/1zaoBu0yz3gFoxdIUAUAeGb4v1qjauwBr/view?usp=sharing"
      imagen="rbal.PNG"/> 

      <Juego name= "The last Archer" 
      link = "https://gastonmansillavj.itch.io/juegoflechas"
      imagen="archer.png"/> 

      <Juego name= "Fublito"
      link = "https://drive.google.com/file/d/1FXI9krtaSSHT-VAp2Vo2V7OfkxkRfoxI/view?usp=sharing"
      imagen="fulbito.PNG"/> 

      <Juego name= "Space Hero" 
      link = "https://drive.google.com/file/d/1FskUHvVDl-UC7s8KN3wwng9xZsh6MBXI/view?usp=sharing"
      imagen="spaceHero.PNG"/> 
      
     
    </div>
  )
}


