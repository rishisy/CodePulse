import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Projectbox.css';
import Button from 'react-bootstrap/Button';


function ProjectBox() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Project1 </Card.Title>
        <Card.Text>
          Desc.
        </Card.Text>
      </Card.Body>

      
      <Card.Body className='cls'>
        <Card.Text>Card Link</Card.Text>
        <Card.Text>Another Link</Card.Text>
      </Card.Body>

      <Button variant="primary" size="lg" className='block'>
        Open
      </Button>
    </Card>
  );
}

export default ProjectBox;