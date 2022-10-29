import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container>
        <div className='footer_container'>
          <h2>Get in Touch</h2>
          <p>I'll write back as soon as possible.</p>

          <a href='mailto: khen0071@gmail.com'>
            <button variant='success'>Contact Me</button>
          </a>
          <p className='copyright'>
            All Rights Reserved. Copyright &copy; 2022{' '}
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
