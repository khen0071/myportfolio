import React from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';

const Experience = () => {
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
            href='https://www.psychicschoice.com/home-old'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-solid fa-link'></i>
          </a>
          Psychics Choice
        </h3>
        <ul>
          <li>
            Developed & maintained code for client websites primary using HTML,
            CSS, Javascript & Duda Creator.
          </li>
          <li>
            Manually tested sites in various browsers and mobile devices to
            ensure cross-browser compatibility and responsiveness.
          </li>
          <li>
            Create and maintain CRM & Database per client. (Facebook Ad Leads &
            Go High Level App)
          </li>
          <li>
            Generate workflow & API Integration for each client. (Automations,
            Stripe for Invoice and Subscription Plans, Slack Notifications)
          </li>
          <li>
            Hot Jar / Full Story API integration for user experience monitoring.
          </li>
        </ul>

        <h3>
          {' '}
          <a
            href='https://www.afunnywayoflooking.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-solid fa-link'></i>
          </a>
          A Funny Way of Looking
        </h3>
        <ul>
          <p>
            {' '}
            Developed MERN Stack web app for production team usage & database
            management:
          </p>
          <p>Includes:</p>
          <li>Redux for State Management</li>
          <li>User Login with password Encryption.</li>
          <li>
            Custom user roles with JWT (JSON Web Tokens) eg: admin, editor,
            producer, design & content staff
          </li>
        </ul>
        <ul>
          <li>Created static website for guest show detail & schedules.</li>
        </ul>
        <h3>
          {' '}
          <a
            href='https://www.scridoncardio.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-solid fa-link'></i>
          </a>
          Dr. Scridon Cardiologist
        </h3>
        <ul>
          <li>
            Developed website with online patient application & appointment
            scheduling via email form submission or Healow scheduling.
          </li>
          <li>Patient Database Management</li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
