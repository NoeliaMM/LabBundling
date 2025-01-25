import React from 'react';
import Logo1 from './images/logo_1.png';



export const NavbarComponent = () => {
    React.useEffect(() => {
      const logo = document.createElement('img');
      logo.src = Logo1;
      logo.alt = 'Logo';
  
      const divlogo = document.getElementById('logo-container');
      if (divlogo) {
        divlogo.appendChild(logo);
      }
    }, []);
  
    return (
      <nav className="navbar">
        <div className="navbar-container">Laboratorio Bundling</div>
        <div id="logo-container"></div>
      </nav>
    );
  };