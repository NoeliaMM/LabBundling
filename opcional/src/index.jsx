
import React from 'react';
import {createRoot} from 'react-dom/client';
import { CardComponent } from './card-component';
import { NavbarComponent } from './navbar-component';

const root = createRoot(document.getElementById('root'));

root.render(
    <>
       <NavbarComponent />
       <CardComponent />
    </>
)