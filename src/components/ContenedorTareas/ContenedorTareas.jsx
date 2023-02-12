import React from 'react'
import './ContenedorTareas.css'
import ListaDeTareas from '../ListaDeTareas/ListaDeTareas'

const ContenedorTareas = () => {
  return (
    <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
    </div>
  )
}

export default ContenedorTareas