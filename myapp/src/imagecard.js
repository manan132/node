import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const imagecard = ({title,desc,imgurl}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {desc}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default imagecard;
