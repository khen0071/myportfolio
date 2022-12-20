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
          <i className='fa-solid fa-code'></i> About
        </h1>

        <Container>
          <div className='about_section_container'>
            <h3>My Profile</h3>
            <div className='profile_container'>
              <p>
                Hello! my name is <strong className='strong'>Kenneth</strong>, I
                am a self-taught{' '}
                <strong className='strong'>Front End Developer</strong> from the
                Philippines and I possess a diverse set of skills ranging from
                design <strong className='strong'>(HTML CSS)</strong> all the
                way to full scale development{' '}
                <strong className='strong'>
                  (Javascript, React JS, Next JS, Node Js, Express Js and NoSQL)
                </strong>
                .
              </p>
              <br></br>
              <p>
                I enjoy building & providing{' '}
                <strong className='strong'>solutions</strong> for small business
                site to rich interactive web app or grow existing projects. If
                you are a business and seeking for a{' '}
                <strong className='strong'>web presence</strong> or an employer
                <strong className='strong'> looking to hire</strong>, I'd be
                more than happy to join your amazing team.
              </p>
              <br></br>

              <p>Few technologies I've been working recently:</p>
              <ul>
                <li>React JS</li>
                <li>Next JS</li>
                <li>Node Js</li>
                <li>Express JS</li>
                <li>NoSQL (MongoDB)</li>
              </ul>
            </div>
            <Row>
              <Col md={12} xs={12}>
                <div className='tabs_container'>
                  <h3>My Journey</h3>
                  <Tabs
                    defaultActiveKey='experience01'
                    id='justify-tab-example'
                    className='mb-3'
                    justify
                  >
                    <Tab eventKey='experience01' title='Freelance'>
                      <Experience01 />
                    </Tab>
                    <Tab eventKey='experience' title='ChileJam'>
                      <Experience />
                    </Tab>

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
