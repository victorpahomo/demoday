import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCarousel from "../../skeletonLoaders/SkeletonCarousel";
import Carousels from "./Carousel";

const News = ({ group }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <section id="studentNews" className="p-1 w-full">
      <div className="">
        <h2 className="text-sm font-semibold">Últimas noticias</h2>
        {/* {loading ? <SkeletonCarousel /> : <Carousels />} */}
        <Carousels />
      </div>
      {/* <a className="flex justify-end items-center mt-1">
        <Link to="/training" className="text-slate-500 hover:text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-lg pr-1 pl-1 ">
          Ver todas
        </Link>
      </a> */}
    </section>
  );
};

export default News;
