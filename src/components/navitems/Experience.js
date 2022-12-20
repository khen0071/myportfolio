import React from 'react';
import { Carousel } from 'react-bootstrap';

import Image1 from '../../images/psychic.png';
import Image2 from '../../images/scridon.png';
import Image3 from '../../images/afwol.png';

const Experience = () => {
  return (
    <>
      <div className='experience_container'>
        <h4>Web Developer & System Manager</h4>

        <p>
          <small>June 2020 - October 2022</small>
        </p>

        <div className='experience_item'>
          <h3>
            {' '}
            <a
              href='https://www.psychicschoice.com/home-old'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-link'></i>
            </a>
            Psychics Choice
          </h3>
          <ul>
            <li>
              Developed & maintained code for client websites primary using
              HTML, CSS, Javascript & Duda Creator.
            </li>
            <li>
              Manually tested sites in various browsers and mobile devices to
              ensure cross-browser compatibility and responsiveness.
            </li>
            <li>
              Create and maintain CRM & Database per client. (Facebook Ad Leads
              & Go High Level App)
            </li>
            <li>
              Generate workflow & API Integration for each client. (Automations,
              Stripe for Invoice and Subscription Plans, Slack Notifications)
            </li>
            <li>
              Hot Jar / Full Story API integration for user experience
              monitoring.
            </li>
          </ul>
        </div>

        <div className='experience_item'>
          <h3>
            {' '}
            <a
              href='https://www.afunnywayoflooking.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-link'></i>
            </a>
            A Funny Way of Looking
          </h3>

          <ul>
            <li>Created static website for guest show detail & schedules.</li>
          </ul>
        </div>

        <div className='experience_item'>
          <h3>
            {' '}
            <a
              href='https://www.scridoncardio.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-link'></i>
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

        <div className='carousel_container'>
          <Carousel fade variant='dark'>
            <Carousel.Item>
              <img className='d-block w-100' src={Image1} alt='first slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={Image2} alt='second slide' />
            </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={Image3} alt='third slide' />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Experience;
