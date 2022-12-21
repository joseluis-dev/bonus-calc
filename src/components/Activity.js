import React, { useEffect, useState } from 'react'
import style from '../styles/Activity.module.css'

function Activity({ activities, colabsList}) {

  const [actividad, setActividad] = useState(activities)

  const handleClick = (e, activity) => {
    const index = colabsList.listNames.indexOf(e.target.id)
    activities.checkRelation(activity, index)
    const newActivity = JSON.parse(JSON.stringify(activities))
    setActividad(newActivity)
  }
  // console.log(actividad)
  
// eslint-disable-next-line
  useEffect(() => {
    setActividad(activities)
    // console.log('LOOP')
  })

  return (
    <>
      <tbody>
          {
            actividad.activityList.map(activity => <tr key={activity} id={activity} className={style.activityColumn}>
              <td>{activity + 1}</td>
              {
                actividad.activityRelations[activity].map((relation, index) => <td 
                  id={colabsList.listNames[index]} 
                  key={colabsList.listNames[index]}
                  onClick={(e) => handleClick(e, activity)}
                  className={style.cell}>
                    {relation}
                  </td>)
              }
            </tr>)
          }
      </tbody>
    </>
  )
}

export default Activity