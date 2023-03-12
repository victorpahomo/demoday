import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const noticias = [
  {
    id: 1,
    title: "Titular de la noticia 1",
    role: "student",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 2,
    role: "student",
    title: "Titular de la noticia 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 3,
    role: "student",
    title: "Titular de la noticia 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 4,
    role: "professor",
    title: "Titular de la noticia 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 5,
    role: "professor",
    title: "Titular de la noticia 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 6,
    role: "student",
    title: "Titular de la noticia 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 7,
    role: "admin",
    title: "Titular de la noticia 7",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 8,
    role: "professor",
    title: "Titular de la noticia 8",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 9,
    role: "student",
    title: "Titular de la noticia 9",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 10,
    role: "student",
    title: "Titular de la noticia 10",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
];

const banner = [
  "https://res.cloudinary.com/duxlfjdym/image/upload/v1678597940/Demoday/banner1_h5ivq1.jpg",
  "https://res.cloudinary.com/duxlfjdym/image/upload/v1678597940/Demoday/banner2_k6fse6.jpg",
  "https://res.cloudinary.com/duxlfjdym/image/upload/v1678597940/Demoday/banner3_msvmbd.jpg",
  "https://res.cloudinary.com/duxlfjdym/image/upload/v1678597940/Demoday/banner4_sglmxa.jpg",
  "https://res.cloudinary.com/duxlfjdym/image/upload/v1678597940/Demoday/banner5_yaepxt.jpg",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // por defecto mostrar 2 diapositivas
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 5 segundos
    responsive: [
      {
        breakpoint: 640, // ajustar la cantidad de diapositivas mostradas en pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // dots: true,
  // infinite: true,
  // speed: 500,
  // slidesToShow: 2,
  // slidesToScroll: 2,
  // autoplay: true,
  // autoplaySpeed: 3000, // 5 segundos
  // let rol = "professor";
  return (
    <div className="overflow-hidden w-full bg-black">
      <Slider {...settings} >
        {banner.map((linkImg, index) => (
          <img key={index} src={linkImg} alt="" className="h-36 bg"/>
        ))}
      </Slider>
    </div>
    // <div className=" bg-white rounded-lg shadow-md">
    //   <Slider {...settings}>
    //     {noticias.map((noticia, index) => (
    //       <Link key={index} to="training">
    //         <div className="flex items-center p-1 bg-slate-10 gap-1">
    //           <div
    //             className={
    //               (noticia.role === "student" &&
    //                 "w-3 h-28 rounded-full bg-blue-200") ||
    //               (noticia.role === "professor" &&
    //                 "w-3 h-28 rounded-full bg-yellow-500") ||
    //               (noticia.role === "admin" &&
    //                 "w-3 h-28 rounded-full bg-red-800")
    //             }
    //           ></div>
    //           <div className="flex flex-col">
    //             <div className="flex gap-2">
    //               <span
    //                 className={
    //                   (noticia.role === "student" &&
    //                     "flex bg-blue-100 text-blue-400 rounded-lg w-auto text-xs items-center justify-center pr-1 pl-1") ||
    //                   (noticia.role === "professor" &&
    //                     "flex bg-yellow-100 text-yellow-500 rounded-lg w-auto text-xs items-center justify-center pr-1 pl-1") ||
    //                   (noticia.role === "admin" &&
    //                     "flex bg-red-100 text-red-800 rounded-lg w-auto text-xs items-center justify-center pr-1 pl-1")
    //                 }
    //               >
    //                 <p>
    //                   {(noticia.role === "student" && "Estudiante") ||
    //                     (noticia.role === "professor" && "Profesor") ||
    //                     (noticia.role === "admin" && "ADMIN")}
    //                 </p>
    //               </span>
    //               <h2
    //                 href="#"
    //                 className={
    //                   (noticia.role === "student" &&
    //                     "text-blue-500 hover:text-blue-700 font-semibold") ||
    //                   (noticia.role === "professor" &&
    //                     "text-yellow-500 hover:text-blue-700 font-semibold") ||
    //                   (noticia.role === "admin" && "text-red-800 font-semibold")
    //                 }
    //               >
    //                 {noticia.title}
    //               </h2>
    //             </div>
    //             <p className="text-gray-500 text-sm p-2">
    //               {" "}
    //               {noticia.description}{" "}
    //             </p>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    //   </Slider>
    // </div>
  );
};

export default Carousel;
