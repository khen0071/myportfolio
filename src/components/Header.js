import React from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Logo from '../images/logo5.png';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='mx-3'>
        <Navbar.Brand href='#hero'>
          <Image src={Logo} className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#certificate'>Certificates</Nav.Link>
            <Nav.Link href='#project'>Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
