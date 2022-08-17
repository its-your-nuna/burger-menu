import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './App.css'
import im from './images/img2.png';

function Burgers2() {
  return (
    <main>
    <Row  xs={1} md={2} className="g-6">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card style={{alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
            <Card.Img variant="top" src="https://st3.depositphotos.com/1000504/19178/i/450/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg" />
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
    <img className='burger1' src={im}/>
    </main>
  );
}

export default Burgers2;