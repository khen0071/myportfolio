import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import Image1 from '../images/prestige2.png';
import Image2 from '../images/support_owl.png';
import Image3 from '../images/pubj.png';

const ProjectsSection = () => {
  return (
    <>
      <div
        className='project_container section'
        id='project'
        data-label='project'
      >
        <h1>
          <i className='fa-solid fa-code'></i> Projects
        </h1>
        <Container>
          <div className='project_section_container'>
            <Row>
              <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                <Card>
                  <Card.Img variant='top' src={Image1} />
                </Card>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                <div>
                  <div className='first_project'>
                    <h4>Freelance Project</h4>
                    <div className='repo'>
                      <span>
                        <a
                          href='https://github.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fa-brands fa-github'></i>
                        </a>
                      </span>
                      <span>
                        <a
                          href='https://github.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fa-solid fa-link'></i>
                        </a>
                      </span>
                    </div>
                    <h2>Prestige Solutions Singapore</h2>

                    <p>
                      <ul>
                        <li>
                          {' '}
                          Built with Next Js, Bootstrap, Custom CSS & Contentful
                          CMS.
                        </li>
                        <li>
                          Customized site for various clients/customers to
                          browse and search for specific product/solution.
                        </li>
                        <li>
                          Developed with MERN Stack web app for production team
                          usage & database management.
                        </li>
                        <li>Redux for State Management</li>
                        <li>User Login with password Encryption</li>
                        <li>
                          Custom user roles with JWT (JSON Web Tokens) eg:
                          admin, editor, producer, design & content staff
                        </li>
                      </ul>
                    </p>
                    <div className='icon_list'>
                      <span>React</span>
                      <span>Custom CSS</span>
                      <span>Bootstrap</span>
                      <span>Contentful CMS</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                <Card>
                  <Card.Img variant='top' src={Image2} />
                </Card>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                <div>
                  <div className='first_project'>
                    <h4>Freelance Project</h4>
                    <div className='repo'>
                      <span>
                        <a
                          href='https://github.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fa-brands fa-github'></i>
                        </a>
                      </span>
                      <span>
                        <a
                          href='https://github.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fa-solid fa-link'></i>
                        </a>
                      </span>
                    </div>
                    <h2>Prestige Solutions Singapore</h2>

                    <p>
                      <ul>
                        <li>
                          {' '}
                          Built with Next Js, Bootstrap, Custom CSS & Contentful
                          CMS.
                        </li>
                        <li>
                          Customized site for various clients/customers to
                          browse and search for specific product/solution.
                        </li>
                        <li>
                          Developed with MERN Stack web app for production team
                          usage & database management.
                        </li>
                        <li>Redux for State Management</li>
                        <li>User Login with password Encryption</li>
                        <li>
                          Custom user roles with JWT (JSON Web Tokens) eg:
                          admin, editor, producer, design & content staff
                        </li>
                      </ul>
                    </p>
                    <div className='icon_list'>
                      <span>React</span>
                      <span>Redux</span>
                      <span>Express</span>
                      <span>MongoDB</span>
                      <span>PayPal API</span>
                      <span>Custom CSS</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                <Card>
                  <Card.Img variant='top' src={Image3} />
                </Card>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} className='p-3'>
                <div>
                  <div className='first_project'>
                    <h4>Freelance Project</h4>
                    <div className='repo'>
                      <span>
                        <a
                          href='https://github.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fa-brands fa-github'></i>
                        </a>
                      </span>
                      <span>
                        <a
                          href='https://github.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <i className='fa-solid fa-link'></i>
                        </a>
                      </span>
                    </div>
                    <h2>Prestige Solutions Singapore</h2>

                    <p>
                      <ul>
                        <li>
                          {' '}
                          Built with Next Js, Bootstrap, Custom CSS & Contentful
                          CMS.
                        </li>
                        <li>
                          Customized site for various clients/customers to
                          browse and search for specific product/solution.
                        </li>
                        <li>
                          Developed with MERN Stack web app for production team
                          usage & database management.
                        </li>
                        <li>Redux for State Management</li>
                        <li>User Login with password Encryption</li>
                        <li>
                          Custom user roles with JWT (JSON Web Tokens) eg:
                          admin, editor, producer, design & content staff
                        </li>
                      </ul>
                    </p>
                    <div className='icon_list'>
                      <span>React</span>
                      <span>Custom CSS</span>
                      <span>Bootstrap</span>
                      <span>Contentful CMS</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectsSection;
