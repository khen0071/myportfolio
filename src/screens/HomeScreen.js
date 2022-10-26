import React from 'react';
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
          <CertificateSection />
          <ProjectsSection />
        </div>

        <div className='side_nav_container'>
          <div className='nav-item'>
            <a href='#hero' class='item'>
              <i class='fa-solid fa-house'></i>
            </a>
          </div>

          <div className='nav-item'>
            <a href='#about' class='item'>
              <i class='fa-regular fa-address-card'></i>
            </a>
          </div>

          <div className='nav-item'>
            <a href='#certificate' class='item'>
              <i class='fa-solid fa-certificate'></i>
            </a>
          </div>

          <div className='nav-item'>
            <a href='#project' class='item'>
              <i class='fa-solid fa-code'></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeScreen;
