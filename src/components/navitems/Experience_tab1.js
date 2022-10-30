import React from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';

const Experience_tab1 = () => {
  return (
    <>
      <div className='experience_container'>
        <h4>Web Developer & System Manager</h4>

        <p>
          <small>June 2019 - October 2022</small>
        </p>

        <h3>
          {' '}
          <a
            href='https://www.scridoncardio.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-solid fa-link'></i>
          </a>
          Scridon Cardio
        </h3>
        <ul>
          <li>
            Developed website with online patient application & appointment
            scheduling via email form submission or Healow scheduling.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Experience_tab1;
