import React from 'react';
import { Col, Row, Card, ListGroup, Container } from 'react-bootstrap';
import Image1 from '../images/nodejs.jpg';
import Image2 from '../images/ecommerce_mern.jpg';
import Image3 from '../images/mern_stack.jpg';

const Certificates = () => {
  return (
    <>
      <div
        className='certificates_container section'
        id='certificate'
        data-label='certificate'
      >
        <div className='certificates_container'>
          <h1>
            <i class='fa-solid fa-code'></i> Certificates
          </h1>
          <Container>
            <Row>
              <Col md={4} sm={12}>
                <Card className='mb-3'>
                  <Card.Img variant='top' src={Image1} />
                  <Card.Body>
                    <Card.Title>Complete Node.js Developer Course</Card.Title>

                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <strong>Instructor:</strong> Andrew Mead
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Completion Date:</strong> Jan 29, 2021
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Total Hours:</strong> 35
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12} className='mb-3'>
                <Card>
                  <Card.Img variant='top' src={Image2} />
                  <Card.Body>
                    <Card.Title>MERN eCommerce From Scratch</Card.Title>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <strong>Instructor:</strong> Brad Traversy
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Completion Date:</strong> Nov 10, 2020
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Total Hours:</strong> 15
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} sm={12} className='mb-3'>
                <Card>
                  <Card.Img variant='top' src={Image3} />
                  <Card.Body>
                    <Card.Title>
                      MERN: Full Stack React, Redux & NodeJs
                    </Card.Title>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <strong>Instructor:</strong> Brad Traversy
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Completion Date:</strong> Jan 11, 2021
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Total Hours:</strong> 12
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Certificates;
