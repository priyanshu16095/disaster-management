import React from 'react';
import Logo from './Logo';
import '../css/button.css';

function SOSButton({ children, className, onClick }) {
  return (
    <div>
      <button className={`btn ${className || ''}`} onClick={onClick}>
        <i className="animation"></i>{children}<i className="animation"></i>
      </button>
    </div>
  );
}

function Navbar({ closeModal, handleShowModal }) {
  return (
    <div className='flex-s'>
      <Logo />
      <div className="flex-h gap-md">
        <p className="link">Resources</p>
        <p className='link'>Disasters and Emergencies</p>
        <SOSButton onClick={() => handleShowModal()}>SOS</SOSButton>
      </div>
    </div>
  );
}

export default Navbar;
