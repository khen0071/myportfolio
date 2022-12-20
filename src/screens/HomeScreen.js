import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificateSection from '../components/Certificates';

const HomeScreen = () => {
  return (
    <>
      <main>
        <div className='main_container'>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CertificateSection />
        </div>

        <div className='side_nav_container'>
          <div className='nav-item'>
            <a href='#hero' className='item'>
              <i className='fa-solid fa-house'></i>
            </a>
          </div>

          <div className='nav-item'>
            <a href='#about' className='item'>
              <i className='fa-regular fa-address-card'></i>
            </a>
          </div>

          <div className='nav-item'>
            <a href='#project' className='item'>
              <i className='fa-solid fa-code'></i>
            </a>
          </div>

          <div className='nav-item'>
            <a href='#certificate' className='item'>
              <i className='fa-solid fa-certificate'></i>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomeScreen;
