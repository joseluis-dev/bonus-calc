import React from 'react'
import ActivityTable from '../components/ActivityTable'
import InputForm from '../components/InputForm'
import { useMyForm } from '../hooks/useMyForm'
import { activities as actividades } from '../services/Activities'

function Home() {
  const { setBonus, activityChange, result, activities } = useMyForm()

  const colabsList = {
    listNames: ['Ivan Lema', 'Javier Vallejo', 'Jose Yepez'],
    bonus: {
      'Ivan Lema': 0,
      'Javier Vallejo': 0,
      'Jose Yepez': 0
    }
  }
  actividades.createActivities(parseInt(activities), colabsList.listNames.length)
  // console.log(actividades)

  return (
    <>
      <h2>Calculadora de Bonos</h2>
      <InputForm setBonus={setBonus} activityChange={activityChange} result={result}/>
      <ActivityTable colabsList={colabsList} activities={actividades} result={result}/>
    </>
  )
}

export default Home