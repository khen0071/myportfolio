import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';

import Programmer from '../images/programmer_vector.jpg';
import Logo from '../images/logo9.png';
import JS from '../images/svg/javascript.svg';
import ReactJS from '../images/svg/react.svg';
import Node from '../images/svg/node.svg';
import Next from '../images/svg/nextjs2.svg';

const HeroSection = () => {
  return (
    <>
      <div className='hero_container section' id='hero' data-label='hero'>
        <div className='logo_container'>
          <Image src={Logo} />
        </div>
        <Container>
          <div className='hero_section_container'>
            <Row>
              <Col md={6} xs={12} className='hero_text_section'>
                <div className='border_text'>
                  <div className='text_container'>
                    <div className='welcome'>
                      <strong>WELCOME</strong>
                    </div>
                    <h4>
                      My name is <strong>Kenneth</strong>
                    </h4>

                    <div className='web_container'>
                      <h2>Software Developer</h2>
                      <h3>at your service</h3>
                    </div>

                    <p>
                      - Over the course of 3 years I've worked with startup
                      companies by assisting them to reach their full potential
                      & prosper to their utmost capabilities.
                    </p>
                    <div className='section_img_container'>
                      <span>
                        <Image src={JS} />
                      </span>
                      <span>
                        <Image src={ReactJS} />
                      </span>
                      <span>
                        <Image src={Node} />
                      </span>
                      <span>
                        <Image src={Next} />
                      </span>
                    </div>
                    <span>
                      <i class='fa-solid fa-list-check'></i>View Projects
                    </span>
                    <span>
                      <i class='fa-regular fa-address-card'></i>About me
                    </span>
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

export default HeroSection;
