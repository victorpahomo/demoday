import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllNewsData } from "../../../services/dataFirebaseService";
import { useDispatch, useSelector } from "react-redux";
import { SkeletonCarousel } from "../../skeletonLoaders";

const Carousel = () => {
  const dispatch = useDispatch();
  // Loaders
  const newsFetchStatus = useSelector((state) => state.news.loading);
  // Data
  const arrayNews = useSelector((state) => state.news?.allNews);

  // Get news data
  useEffect(() => {
    dispatch(getAllNewsData())
  }, [dispatch])

  const carouselSettings = {
    /*
    vertical: true,
    verticalSwiping: true,
    swipToSlide: true, */
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // por defecto mostrar 3 diapositivas
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 4 segundos
    responsive: [
      {
        breakpoint: 640, // ajustar la cantidad de diapositivas mostradas en pantallas pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="studentNews" className="p-1 w-full">
      <h2 className="text-sm font-semibold">Últimas noticias</h2>
      {newsFetchStatus === "pending" ?//Loading
        (
          <SkeletonCarousel />
        )
        :
        newsFetchStatus === "rejected" ?//Error
          (<h1>Hubo un error</h1>)
          ://Success
          (
            <div className="overflow-hidden w-full bg-black">
              <Slider {...carouselSettings}>
                {arrayNews.map((notice, index) => (
                  <img key={index} src={notice.image} alt="" className="h-36 bg" />
                ))}
              </Slider>
            </div>
          )
      }
    </section>

  );
};

export default Carousel;
