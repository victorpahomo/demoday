import React, { useState } from 'react';
/* import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; */

/* function PDFViewer() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const filePath = require('../assets/example.pdf');
 // Change this to the path of your PDF file
  return (
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js">
          <div style={{ height: '750px' }}>
              <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
          </div>
      </Worker>
  );
} */

import MainLayout from '../layout/MainLayout'
const Training = () => {
  const PDF_URL = "https://www.africau.edu/images/default/sample.pdf"
  return (
    <div className=''>
      <MainLayout props="Formación">
        <div className='bg-white px-5 py-20'>

          <h1 className='text-2xl font-bold text-primary-AzulVerde3'>Ruta Actual: <span className='text-xl text-primary-AzulVerde2'>Fundamentos</span></h1>
          <p className='text-primary-azulCeleste5'>Link a la próxima clase: <a className='hover:text-primary-AzulVerde4' href="https://makaia-my.sharepoint.com/personal/mentoria2_bootcamp_makaia_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmentoria2%5Fbootcamp%5Fmakaia%5Forg%2FDocuments%2FFundamentos%20web%20frontend%202&ga=1">pulsa aquí</a> </p>

          <div className="btm-nav static rounded-md">
            <button className="text-primary-Azul5 bg-slate-200 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </button>
            <button className="text-primary-Azul5 bg-slate-200 active">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
            <button className="text-primary-Azul5 bg-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </button>
          </div>

         {/*  <div className="App">
            <PDFViewer />
          </div> */} 
        </div>
      </MainLayout>
    </div>
  )
}

export default Training