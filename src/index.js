
import LogoCard from './images/logo_1.png';

function addImgCard() {
    const logo = document.createElement('img');
    logo.src = LogoCard; 
    logo.alt = 'Logo';
    
    const divlogo = document.getElementById('logo-container');
    divlogo.appendChild(logo);

}

addImgCard();
