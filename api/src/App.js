import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Container, Navbar, Card, Row,Col } from 'react-bootstrap';
import './Api.css';
const axios = require('axios');

function App() {

  let [char, setchar] = useState([]);
  let [char1, setchar1] = useState([]);




  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(function (response) { 
        console.log(response.data.results);

        setchar(response.data.results)  
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  // useEffect(() => {
  //   axios.get("https://rickandmortyapi.com/api/location")
  //     .then(function (response) {
  //       console.log(response.data.results);
  //       setchar1(response.data.results)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }, [])
  return (
    <>
      <div>
        <Navbar bg="light" expand="lg">
          <Container >
            <Navbar.Brand><img width="50" height="50" src={require('./img/logo1.jpg')} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>Docs</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Button variant="outline-warning">SUPPORT US</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <h1 className='s1'>The Rick and Morty API</h1>
      </div>
      <Row>
      {
        char.map((item, i) => {
          return (
            <>
              {/* <div className='Container'>
              <div key={i} className='s2'  >
                  <Card.Img style={{height:'30%',width:'30%',borderRadius:'20px',float:'left',border:'5px solid black'}} variant="top" className='s4' src={item.image} /> 
                   <Card.Body style={{float:'left'}}>
                    
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
               </div>  
                <div  className='s3'>
               <h1>{item.name}</h1>
               </div>
               </div> */}
              {/* <div className='Container'>
               <tr>
                 <td><img  src={item.image} /></td>
                 <td>{item.name}</td> 
               </tr>
               </div> */}
              {/* <div key={i} className='container'>
                <h1>{item.name}</h1>
                <br></br>
                <h1>{item.residents}</h1>
              </div> */}
              <div className='col-6'>
            
                <Card >
                  <Row>
                  <Col sm={'6'}>
                  <img src={item.image}/>
                  </Col>
                  <Col sm={'6'}>
                  <Card.Body>
                    <Card.Text>
                      <h1>{item.name}</h1>
                      <p>{item.status}</p>
                    </Card.Text>
                  </Card.Body>
                  </Col>
                  </Row>
                </Card>
              </div>
            </>
          )
        })
      }
      </Row>
    </>
  );
}
export default App;