import React from 'react';
import { Col, Row, Container, Tabs, Tab } from 'react-bootstrap';
import Experience from './navitems/Experience';
import Experience01 from './navitems/Experience_tab1';
import Experience02 from './navitems/Experience_tab2';

const AboutSection = () => {
  return (
    <>
      <div className='about_container section' id='about' data-label='about'>
        <h1>
          <i class='fa-solid fa-code'></i> About
        </h1>

        <Container>
          <div className='about_section_container'>
            <h3>My Profile</h3>
            <div className='profile_container'>
              <p>
                Hello! my name is <strong className='strong'>Kenneth</strong>,
                and I'm a Philippine based freelancer. I'm working remotely on
                projects for clients all over the world.
              </p>
              <br></br>
              <p>
                I have a diverse set of skills, ranging from design, to{' '}
                <strong className='strong'>HTML CSS Javascript</strong>, all the
                way to{' '}
                <strong className='strong'>
                  React, Node and NoSQL module{' '}
                </strong>
                development.
              </p>
              <br></br>

              <p>Self-taught Front End Developer</p>
              <p>
                I can provide solutions for problems or grow existing projects
              </p>
              <br></br>

              <p>
                I am a <strong className='strong'>Software Developer</strong>{' '}
                from the Philippines. I enjoy building everything from small
                business site to rich interactive web apps. If you are a
                business and seeking for a web presence of an employer looking
                to hire, I'd be more than happy to join your amazing team.{' '}
              </p>
            </div>
            <Row>
              <Col md={12} xs={12}>
                <div className='tabs_container'>
                  <h3>My Journey</h3>
                  <Tabs
                    defaultActiveKey='experience'
                    id='justify-tab-example'
                    className='mb-3'
                    justify
                  >
                    <Tab eventKey='experience' title='ChileJam'>
                      <Experience />
                    </Tab>
                    {/* <Tab eventKey='experience1' title='Scridon Cardio'>
                      <Experience01 />
                    </Tab> */}
                    <Tab eventKey='experience2' title='GEMINI'>
                      <Experience02 />
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutSection;
