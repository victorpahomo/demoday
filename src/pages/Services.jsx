import React from "react";
import CardServices from "../components/CardServices";
import MainLayout from "../layout/MainLayout";

const courses = {
  "2023-html-1": {
    title: "Curso inicial de HTML5",
    description: "Aprende a crear la estruccturas páginas web con HTML5",
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Kbu_OnGEVUCvfMPYnj191g.png",
    hours: "4",
    category: "html",
  },
  "2023-redux-1": {
    title: "Curso inicial de Redux",
    description: "Aprende a usar Redux y Redux Toolkit en tus webs",
    image:
      "https://www.courses.tutorialswebsite.com/assets/front/img/category/react-redux-category.jpeg",
    hours: "10",
    category: "redux",
  },
  "2023-css-1": {
    title: "Curso inicial de CSS3",
    description: "Aprende a crear páginas web sencillas con CSS3",
    image:
      "https://miro.medium.com/v2/resize:fit:336/1*nFj_gJtwus-ZVIwDE4oGrw.png",
    hours: "4",
    category: "css",
  },
  "2023-js-1": {
    title: "Curso inicial de JavaScript",
    description: "Aprende a crear páginas web con JavaScript",
    image:
      "https://onlinecoursesgalore.com/wp-content/uploads/2018/01/best-javascript-programming-courses-online.jpg",
    hours: "8",
    category: "js",
  },
  "2023-react-1": {
    title: "Curso inicial de React",
    description: "Aprende a crear páginas web con React",
    image: "https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe",
    hours: "15",
    category: "react",
  },
},

const Services = () => {
  return (
    <MainLayout props="Servicios">
      <CardServices />
    </MainLayout>
  );
};

export default Services;
