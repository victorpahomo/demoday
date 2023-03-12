import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import LatestNews from "./LatestNews";

const News = ({ group }) => {
  return (
    <section
      id="studentNews"
      className=" bg-white p-1 w-11/12"
    >
      <div>
        <h2 className="text-xl font-bold">Últimas noticias</h2>
        <Carousel />
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
