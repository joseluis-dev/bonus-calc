import React, { useState } from 'react'
import { trunc } from '../services/trunc'
import Activity from './Activity'
import Result from './Result'
import style from '../styles/ActivityTable.module.css'

function ActivityTable({ colabsList, activities, result }) {

  const [colabs, setColabs] = useState(colabsList)
  const [show, setShow] = useState(false)

  const calculate = () => {
    colabsList.listNames.forEach(colaborator => {
      colabsList.bonus[colaborator] = 0
    })
    activities.activityList.forEach(activity => {
      if (activities.checkNum[activity] > 0) {
        const unitValue = result/activities.checkNum[activity]
        // console.log(unitValue)
        colabsList.listNames.forEach((colaborator, index) => {
          if (activities.activityRelations[activity][index] === '✔') {
            colabsList.bonus[colaborator] = colabsList.bonus[colaborator] + unitValue
          }
        })
      }
    })
    colabsList.listNames.forEach(colaborator => {
      colabsList.bonus[colaborator] = trunc(colabsList.bonus[colaborator], 2)
    })
    const newColabs = JSON.parse(JSON.stringify(colabsList))
    setColabs(newColabs)
    setShow(true)
  }
  // console.log(activities, colabs)

  return (
    <>
      <button onClick={calculate}>Calcular</button>
      <div className={style.tableContainer}>
        <div>
          <table>
            <thead>
              <tr className={style.tableHeader}>
                <td>#</td>
                {
                  colabs.listNames.map(colab => <td key={colab}>{colab}</td>)
                }
              </tr>
            </thead>
            <Activity  activities={activities} colabsList={colabsList}/>
          </table>
        </div>
        <Result colabs={colabs} show={show} className={style.resultTable}/>
      </div>
    </>
  )
}

export default ActivityTable