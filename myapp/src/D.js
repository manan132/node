import React, {useContext} from 'react'
import DataContext from './DataContext'

const D = () => {
    const sharedData = useContext(DataContext)
  return (
    <div>
    DComponent
    <p>Cars Purchased By Manan: {sharedData}</p>
    </div>
  )
}

export default D
