import React, { useState } from "react";
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

import MainLayout from "../layout/MainLayout";
const Training = () => {
  const PDF_URL = "https://www.africau.edu/images/default/sample.pdf";
  return (
    <MainLayout props="Formación">
      <div className="mx-auto">
        <div className="flex justify-between my-4">
          <h1 className="text-xl font-bold text-primary-AzulVerde3">
            Ruta actual:
            <span className="text-xl text-primary-AzulVerde2">
              {" "}
              fundamentos.
            </span>
          </h1>
          <h1 className="text-xl font-bold text-primary-AzulVerde3">
            Asistencia:
            <span className="text-xl text-primary-AzulVerde2"> 20%.</span>
          </h1>
        </div>
        <p className="text-primary-azulCeleste5 mb-2">
          Link a la próxima clase:
          <a
            className="hover:text-primary-AzulVerde4"
            href="https://makaia-my.sharepoint.com/personal/mentoria2_bootcamp_makaia_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmentoria2%5Fbootcamp%5Fmakaia%5Forg%2FDocuments%2FFundamentos%20web%20frontend%202&ga=1"
          >
            {" "}
            pulsa aquí
          </a>
        </p>

        <div className="">
          <ul className="relative grid grid-cols-2 bg-slate-100">
            <li className="">
              <input
                defaultChecked
                id="Temas"
                type="radio"
                name="tab"
                className="peer absolute w-0 h-0 invisible"
              />
              <label
                htmlFor="Temas"
                className="block text-center  text-slate-600 font-medium peer-checked:bg-slate-300 py-4 cursor-pointer"
              >
                Temas
              </label>
              <div className="h-auto p-8 overflow-auto hidden peer-checked:block w-full left-0 bg-slate-300 ">
                <ul>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore?
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore?
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore?
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore?
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore?
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                  <li className="p-1">
                    {" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda, dolor corrupti iure error nostrum aut recusandae
                    at nulla impedit deleniti quisquam cumque facilis nesciunt
                    sint totam voluptatem! Impedit, possimus dolore? xxxxxxxxxxx
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex-grow h-fit">
              <input
                id="Grabaciones"
                type="radio"
                name="tab"
                className="peer absolute w-0 h-0 invisible"
              />
              <label
                htmlFor="Grabaciones"
                className="block text-center text-slate-600 font-medium peer-checked:bg-slate-300  py-4 cursor-pointer"
              >
                Grabaciones
              </label>
              {/* <div className="max-h-[26rem] p-8 overflow-auto absolute hidden peer-checked:block w-full left-0 bg-slate-300"> " */}
              <div className="h-auto w-full p-8 overflow-auto hidden peer-checked:block  left-0 bg-slate-300 ">
                <ul>
                  <li className="p-1"> luis</li>
                  <li className="p-1"> petra</li>
                  <li className="p-1"> luis</li>
                  <li className="p-1"> petra</li>
                  <li className="p-1"> luis</li>
                  <li className="p-1"> petra</li>
                  <li className="p-1"> luis</li>
                  <li className="p-1"> petra</li>
                  <li className="p-1"> luis</li>
                  <li className="p-1"> petra</li>
                  <li className="p-1"> luis</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Training;
