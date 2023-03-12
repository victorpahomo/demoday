import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const noticias = [
  {
    id: 1,
    title: "Titular de la noticia 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 2,
    title: "Titular de la noticia 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 3,
    title: "Titular de la noticia 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 4,
    title: "Titular de la noticia 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 5,
    title: "Titular de la noticia 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 6,
    title: "Titular de la noticia 6",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 7,
    title: "Titular de la noticia 7",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 8,
    title: "Titular de la noticia 8",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 9,
    title: "Titular de la noticia 9",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
  {
    id: 10,
    title: "Titular de la noticia 10",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta optio quia neque cupiditate voluptate doloribus natus iusto eveniet quisquam quam mollitia quasi, itaque harum est nulla amet, aliquam, pariatur tempora.",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000, // 5 segundos
  };

  return (
    <div className=" bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Últimas noticias</h2>
      <Slider {...settings}>
        {noticias.map((noticia, index) => (
          <Link key={index} to="training" >
            <div className="p-1 bg-slate-10 mr-1">
              <h2 href="#" className="text-yellow-500 hover:text-blue-700">
                {noticia.title}
              </h2>
              <p className="text-gray-500 text-sm"> {noticia.description} </p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
