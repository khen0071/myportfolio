import React from 'react';
import { Container } from 'react-bootstrap';
// import svg1 from '../images/svg/react.svg';
// import svg2 from '../images/svg/javascript.svg';
// import svg3 from '../images/svg/contentful.svg';
// import svg4 from '../images/svg/nextjs.svg';
// import svg5 from '../images/svg/node.svg';
// import svg6 from '../images/svg/redux.svg';

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
          {/* <div className='project_main_container'>
            <h2>My Accomplished Projects</h2>
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
          </div> */}
        </Container>
      </div>

      <Container>
        <div className='project_section_container'>
          <div className='first_project'>
            {/* <div className='project_image'>
              <Image src={Prestige} />
            </div> */}
            <h4>Large Scale Project</h4>
            <h2>E-commerce Project</h2>
            <p>
              A minimal, light blue e-commerce website with PayPal API
              integration for payment process. Build with React Js &
              NodeJs(Express). MongoDB for database and simple bootstrap for CSS
              framework.{' '}
            </p>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>PayPal API</li>
              <li>Custom CSS</li>
            </ul>
            <ul>
              <li>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-brands fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-solid fa-link'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectsSection;
