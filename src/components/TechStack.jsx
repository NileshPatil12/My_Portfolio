import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import CPP from "../../public/CPP.png";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import SQL from "../../public/SQL.png";

function TechStack() {
  const cardItem = [
    { id: 1, logo: html, name: "MongoDB" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: CPP, name: "C++" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: SQL, name: "SQL" },
    { id: 6, logo: reactjs, name: "ReactJs" },
    { id: 7, logo: node, name: "NodeJs" },
  ];

  return (
    <div
      name="Tech Stack"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-5 tracking-wide">
        Tech Stack
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
        Tools & Technologies</p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-xl p-6 shadow-xl transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl hover:border-blue-500 cursor-pointer"
            >
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mb-4 transition-all duration-500 transform hover:scale-110"
              />
              <h3 className="text-lg font-medium text-gray-700">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
