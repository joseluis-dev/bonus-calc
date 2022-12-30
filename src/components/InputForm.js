import style from '../styles/InputForm.module.css'
import { useEffect, useState } from 'react'

function InputForm({ setBonus, activityChange, result }) {

  const [activityValue, setActivityValue] = useState()

  useEffect(() => {
    if (!result) return
    const stringResult = result.toString()
    const indexOf = stringResult.indexOf('.')
    const formatedResult = stringResult.slice(0, indexOf + 3)
    setActivityValue(formatedResult)
  }, [result])

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
          value={activityValue}/>
      </form>
    </>
  )
}

export default InputForm