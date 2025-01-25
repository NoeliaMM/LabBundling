import React from 'react';
import Logo2 from './images/logo_2.png';



export const CardComponent = () => {
    return (
      <div className="card card-container">
        <img src={Logo2} className="card-img-top" id="card-logo" alt="Logo" />
        <div className="card-body">
          <h5 className="card-title">Hola mundo con React</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit consequatur adipisci, asperiores aliquam
            repudiandae cum, labore modi inventore reprehenderit reiciendis unde nostrum similique voluptate odio fugit
            consequuntur facilis. Cupiditate.
          </p>
        </div>
      </div>
    );
  };