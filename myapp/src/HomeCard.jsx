import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const HomeCard = () => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE2OTI4MDgxNDR8MA&ixlib=rb-4.0.3" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

    </div>
  )
}

export default HomeCard