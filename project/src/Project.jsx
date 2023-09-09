import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Project = () => {
    const [Count, setCount] = useState(0)
    const HandClick=()=>{
    setCount(Count+1)
    }
    const RemClick=()=>{
      if(Count===0){
        alert("Alert!!")
      }
      else{
        setCount(Count-1)
      }
      
    }
  return (
    <div>
    <Card style={{ width: '18rem' }}>

    <Card.Body>
      <Card.Title>Counter App</Card.Title>
      <Card.Text>
        Count:{Count}
      </Card.Text>
      <Button onClick={HandClick} variant="primary">+</Button>
      <Button onClick={RemClick} variant="danger">-</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Project