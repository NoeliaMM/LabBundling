import 'bootstrap/dist/css/bootstrap.min.css';
import './mystyles.scss';
import {createRoot} from "react-dom/client";
import { HelloComponent } from './hello';

const divRoot: HTMLElement | null = document.getElementById('root');

if(divRoot && divRoot instanceof HTMLElement){
    const root = createRoot(divRoot);

    root.render(<HelloComponent />);
}
else{
    console.error('No se encontró el elemento con id "root"');
}


