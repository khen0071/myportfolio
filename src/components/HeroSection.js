import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';

import Logo from '../images/logo9.png';
import JS from '../images/svg/javascript.svg';
import ReactJS from '../images/svg/react.svg';
import Node from '../images/svg/node4.svg';
import Next from '../images/svg/nextjs.svg';

const HeroSection = () => {
  return (
    <>
      <div className='hero_container section' id='hero' data-label='hero'>
        <div className='logo_container'>
          <Image src={Logo} alt='logo' />
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
                      My name is <strong className='strong'>Kenneth</strong>,
                    </h4>

                    <div className='web_container'>
                      <h2>
                        <strong className='strong_hero'>
                          Front End Developer
                        </strong>{' '}
                      </h2>
                    </div>

                    <p>
                      - Over the course of 3 years I've worked with startup
                      companies by assisting them to reach their full potential
                      & prosper to their utmost capabilities.
                    </p>
                    <div className='section_img_container'>
                      <Image src={JS} alt='icon' />

                      <Image src={ReactJS} alt='icon' />

                      <Image src={Node} alt='icon' />

                      <Image src={Next} alt='icon' />
                      {/* <Image src={Node2} /> */}
                    </div>

                    <div className='view'>
                      <a href='#about' className='item'>
                        <i className='fa-regular fa-address-card'></i>
                        <span>About me</span>
                        <a href='#project' className='item'>
                          <i className='fa-solid fa-list-check'></i>
                          <span>View Projects</span>
                        </a>
                      </a>
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

export default HeroSection;
