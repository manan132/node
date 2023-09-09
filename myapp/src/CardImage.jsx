import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardImage = (val2) => {

  const [Count, setCount] = useState(0)
  const HandleClick=()=>{
    setCount(Count+1)
    console.log("Button Clicked")
  }
  
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={val2.imgurl} />
    <Card.Body>
      <Card.Title>{val2.title}</Card.Title>
      <Card.Text>
        {val2.desc}
      </Card.Text>
      <Button onClick={HandleClick} variant="primary">Go somewhere</Button>
      {Count}
    </Card.Body>
  </Card>
    </div>
  )
}

export default CardImage
