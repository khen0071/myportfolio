import React from 'react';
import { Col, Row, Card, ListGroup, Container, Image } from 'react-bootstrap';
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
            <h3>My Learnings</h3>
            <Row>
              <Col md={4} sm={12}>
                <Card className='mb-3'>
                  <Card.Img variant='top' src={Image1} />
                  <Card.Body>
                    <Card.Title>Complete Node.js Developer Course</Card.Title>

                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        Instructor:
                        <strong className='strong'> Andrew Mead</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Completion Date:
                        <strong className='strong'> Jan 29, 2021</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Hours: <strong className='strong'>35</strong>
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
                        Instructor:
                        <strong className='strong'> Brad Traversy</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Completion Date:
                        <strong className='strong'> Nov 10, 2020</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Hours: <strong className='strong'>15</strong>
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
                        Instructor:
                        <strong className='strong'> Brad Traversy</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Completion Date:
                        <strong className='strong'> Jan 11, 2021</strong>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Total Hours: <strong className='strong'>12</strong>
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
