import React from 'react'
import DataContext from './DataContext'
import B from './B'

const A = () => {
    const Manan="Mujhe BMW I7 and Mercedes Meybach Chahiye Worth: 5,00,00,000"
  return (
    <DataContext.Provider value={Manan}>
    <div>
      AComponent
      <B/>
    </div>
    </DataContext.Provider>
  )
}

export default A
