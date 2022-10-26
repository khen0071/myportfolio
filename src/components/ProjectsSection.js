import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import svg1 from '../images/svg/react.svg';
import svg2 from '../images/svg/javascript.svg';
import svg3 from '../images/svg/contentful.svg';
import svg4 from '../images/svg/nextjs2.svg';
import svg5 from '../images/svg/node.svg';
import svg6 from '../images/svg/redux.svg';

const ProjectsSection = () => {
  return (
    <>
      <div
        className='project_container section'
        id='project'
        data-label='project'
      >
        <h1>
          <i class='fa-solid fa-code'></i> Project Section
        </h1>

        <Container>
          <div className='project_main_container'>
            <h2>Accomplished Projects</h2>
            <p>Things I've Created...</p>
            <div className='project_item_container'>
              <Row>
                <Col md={4} xs={12} className='my-1'>
                  <div className='project_item_container'>
                    <div className='project_item'>
                      <h4>Ecommerce</h4>
                      <p>
                        Building a custom multi device compatible E-commerce
                        application.
                      </p>
                      <div className='stack'>
                        <span>
                          <img src={svg1} />
                        </span>
                        <span>
                          {' '}
                          <img src={svg5} />
                        </span>
                        <span>
                          {' '}
                          <img src={svg6} />
                        </span>
                      </div>

                      <i class='fa-brands fa-github'></i>
                    </div>
                  </div>
                </Col>
                <Col md={4} xs={12} className='my-1'>
                  <div className='project_item_container'>
                    <div className='project_item'>
                      <h4>Ecommerce</h4>
                      <p>
                        Building a custom multi device compatible E-commerce
                        application.
                      </p>
                      <div className='stack'>
                        <span>
                          <img src={svg1} />
                        </span>
                        <span>
                          {' '}
                          <img src={svg5} />
                        </span>
                        <span>
                          {' '}
                          <img src={svg6} />
                        </span>
                      </div>

                      <i class='fa-brands fa-github'></i>
                    </div>
                  </div>
                </Col>{' '}
                <Col md={4} xs={12} className='my-1'>
                  <div className='project_item_container'>
                    <div className='project_item'>
                      <h4>Ecommerce</h4>
                      <p>
                        Building a custom multi device compatible E-commerce
                        application.
                      </p>
                      <div className='stack'>
                        <span>
                          <img src={svg1} />
                        </span>
                        <span>
                          {' '}
                          <img src={svg5} />
                        </span>
                        <span>
                          {' '}
                          <img src={svg6} />
                        </span>
                      </div>

                      <i class='fa-brands fa-github'></i>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectsSection;
