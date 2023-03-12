import Carousel from "./Carousel";
import LatestNews from "./LatestNews";

const News = ({ group }) => {
  return (
    <section
      id="studentNews"
      className=" bg-white p-5 rounded-2xl border-4 w-11/12"
    >
      {/* <LatestNews/> */}
      <Carousel />
    </section>
  );
};

export default News;
