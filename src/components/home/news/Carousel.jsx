import React, { useState, useEffect } from "react";

const novedades = [
  {
    id: 1,
    title: "Novedad 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Novedad 2",
    author: "Author 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 3,
    title: "Novedad 3",
    author: "Author 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 4,
    title: "Novedad 4",
    author: "Author 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % novedades.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, novedades.length]);

  return (
    <div className="relative h-64 transition-transform duration-1000 ease-in-out overflow-hidden">
      {novedades.map((novedad, index) => (
        <div
          key={novedad.id}
          className={`absolute w-full h-full transition-all duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="relative h-full">
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-900"></div>
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gray-900"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap -mx-8">
                <div className="w-full lg:w-1/2 px-8">
                  <div className="relative">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
                      {novedad.title}
                    </h2>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      {novedad.description}
                    </p>
                    <div className="mt-8">
                      <div className="inline-flex rounded-md shadow">
                        <a
                          href="#"
                          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Leer más
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
