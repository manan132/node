import React from 'react'

const ChildComponent = ({onDataFromChild}) => {
   
    const SendDataToParent=()=>{
        const data="Logged in"
        onDataFromChild(data)
    }
  
    return (
    <>
       <div>ChildComponent</div>
       <button onClick={SendDataToParent}>send</button>
    </>
  )
}

export default ChildComponent