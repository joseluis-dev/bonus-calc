import React from 'react'
import style from '../styles/Result.module.css'

function Result({ colabs, show }) {
  // console.log(colabs)

  return (
    <div className={style.resultTableContiner}>
    { show &&
      <table>
        <thead>
          <tr className={style.tableHeader}>
            <td>Socio</td>
            <td>Bono</td>
          </tr>
        </thead>
        <tbody>
          {
            colabs.listNames.map(colab => <tr key={colab} className={style.resultBody}>
                <td>{colab}</td>
                <td>{colabs.bonus[colab]}</td>
              </tr>)
          }
        </tbody>
      </table>
    }
    </div>
  )
}

export default Result