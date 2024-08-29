import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Cabecera } from './cabecera.jsx'
import { Juegos } from './juegos.jsx'
import { Juego } from './juego.jsx'
import { SobreNosotros } from './sobreNosotros.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cabecera/> 
    <SobreNosotros texto="Creemos que los videojuegos son una forma de arte y una poderosa herramienta para contar historias. Nuestra misión es crear títulos que no solo capten la atención de los jugadores, sino que también dejen una impresión duradera, fomentando comunidades y creando recuerdos que perduran."
     imagen ="capsula.png"
     />
    <Juegos/> 
    <SobreNosotros texto="Nuestro Proceso Desde la conceptualización hasta el lanzamiento, nuestro equipo multidisciplinario trabaja en cada detalle con precisión y creatividad. Nos especializamos en el desarrollo de juegos tanto para plataformas móviles como para consolas, integrando tecnologías de vanguardia y las últimas tendencias del mercado para garantizar productos de alta calidad." 
    imagen ="personaje.png"
    />
    <SobreNosotros texto="Somos apasionados por el arte de crear experiencias inmersivas y emocionantes a través de los videojuegos. Nos dedicamos a desarrollar juegos que no solo entretienen, sino que también inspiran y desafían a nuestros jugadores, transportándolos a mundos llenos de aventura, estrategia y diversión." 
    imagen ="1.png"
    />
  </StrictMode>,
)
