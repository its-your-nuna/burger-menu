import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'
import im from './images/img1.png';

function Burgers() {
  return (
    <main>
    <img className='burger1' src={im}/>
    <Row  xs={1} md={2} className="g-6">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card style={{alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtD_kxsDiHvX7ARn90jcm8Mpi6AkagntS8JghGP-2H57NFVzm02iVtOwjJte34OJWRSig&usqp=CAU" />
            <Card.Body>
              <Card.Title>Burger {idx+1}</Card.Title>
              <Card.Text>
                Price: 3$
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </main>
  );
}

export default Burgers;