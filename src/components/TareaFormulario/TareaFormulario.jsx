import React, {useState} from 'react'
import './TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid'

const TareaFormulario = ({ onSubmit }) => {

  const [input,setInput]=useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    
    onSubmit(tareaNueva);
  }

  return (
    <form action='' 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
        <input 
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto' 
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar tarea</button>
    </form>
  )
}

export default TareaFormulario