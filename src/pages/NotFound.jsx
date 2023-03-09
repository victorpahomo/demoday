import React from 'react';
import CodeLMSIcon from '../assets/CodeLMSIcon.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-primary-azulCeleste2">
      <figure className=''>
        <img className='w-80 h-30' src={CodeLMSIcon} alt="CodeLMSIcon" />
      </figure>
      <h1 className="text-primary-Azul5 text-5xl font-bold mb-4">404</h1>
      <p className="text-primary-Azul5 text-lg mb-8">Oops! La página que buscas no se encuentra.</p>
      <Link to="/" className="btn btn-primary bg-primary-azulCeleste5 border-none hover:bg-primary-AzulVerde2">Volver a la página de inicio</Link>
    </div>
  );
}

export default NotFound;
