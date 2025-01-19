
import LogoCard from './images/logo_1.png';

const addImgCard = () :void => {
    
    const logo: HTMLImageElement = document.createElement('img');
    logo.src = LogoCard; 
    logo.alt = 'Logo';

    const divLogo: HTMLElement | null = document.getElementById('logo-container');
    
    if (!divLogo) {
        console.error('No existe el contenedor con id "logo-container"');
        return;
    }

    divLogo.appendChild(logo);
}

addImgCard();
