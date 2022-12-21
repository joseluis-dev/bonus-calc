import React from 'react'
import style from '../styles/InputForm.module.css'

function InputForm({ setBonus, activityChange, result }) {

  return (
    <>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="bonus">Monto Bonificación</label>
        <input 
          id='bonus' 
          type="number" 
          name='bonus'
          placeholder='Capital'
          onChange={(e) => setBonus(e.target.value)}/>

        <label htmlFor="activities">Número de Actividades</label>
        <input 
          id='activities' 
          type="number"
          name='activities'
          placeholder='Actividades'
          onChange={(e) => activityChange(e.target.value)}/>

        <label htmlFor="result">Valor por actividad</label>
        <input 
          id='result' 
          type="number" 
          disabled
          className={style.resultInput}
          value={result}/>
      </form>
    </>
  )
}

export default InputForm