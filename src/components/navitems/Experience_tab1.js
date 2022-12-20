import React from 'react';

const Experience_tab1 = () => {
  return (
    <>
      <div className='experience_container'>
        <h4>Freelance Web Developer & System Manager</h4>

        <p>
          <small>June 2019 - October 2022</small>
        </p>

        <div className='experience_item'>
          <h3>
            {' '}
            <a
              href='https://www.prestigesolutions.com.sg/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-link'></i>
            </a>
            Prestige Solutions Singapore
          </h3>
          <p>
            {' '}
            Singapore based company providing products/solutions for various
            clients like hotel, restaurant, events, etc.
          </p>
          <ul>
            <li>Built with Next JS, Bootstrap, Custom CSS & Contentful CMS.</li>

            <li>
              Customized site for various clients to browse and search for
              specific product/solution.
            </li>
            <li>Cross-browser compatible and responsiveness.</li>
            <li>Maintain & Updates website as per client request.</li>
          </ul>
        </div>

        <div className='experience_item'>
          <h3>
            {' '}
            <a
              href='https://www.supportowlph.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-link'></i>
            </a>
            Support Owl PH
          </h3>
          <p>Philippine based company for Virtual Assistant Support.</p>
          <ul>
            <li>
              Built with React JS, Bootstrap, Custom CSS, Framer Motion & PayPal
              API.
            </li>

            <li>
              Designed site for various clients to browse and search for
              qualified Virtual Assistants.
            </li>
            <li>Cross-browser compatible and responsiveness.</li>
            <li>Maintain & Updates website as per client request.</li>
          </ul>
        </div>

        <div className='experience_item'>
          <h3>
            {' '}
            <a
              href='https://www.pubj.vip/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-solid fa-link'></i>
            </a>
            PUBJ VIP
          </h3>
          <p>Philippine based marketing website selling alcohol products.</p>
          <ul>
            <li>Built with React JS, Custom CSS & Messenger API.</li>

            <li>
              Designed site for a single client to showcase alcohol products.
            </li>
            <li>Cross-browser compatible and responsiveness.</li>
            <li>Maintain & Updates website as per client request.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience_tab1;
