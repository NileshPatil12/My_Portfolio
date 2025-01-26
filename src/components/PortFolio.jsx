import React from "react";
import CPP from "../../public/CPP.png";
import SQL from "../../public/SQL.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import Mail from "../../public/Project/Mail.png";
import Portfolio from "../../public/Project/Portfolio.png";
import Shopzy from "../../public/Project/Shopzy.png";
import Weather from "../../public/Project/Weather.png";
import Edtechlearn from "../../public/Project/Edtechlearn.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: Shopzy,
      name: "Shopzy Ecom",
      live_link: "https://reactjs-website123.netlify.app/",
      github: "https://github.com/NileshPatil12/Shopzy-Ecommerce/",
    },
    {
      id: 2,
      logo: Weather,
      name: "Weather app",
      live_link: "https://weather-reportz.netlify.app/",
      github: "https://github.com/NileshPatil12/Weather-App",
    },
    {
      id: 3,
      logo: Portfolio,
      name: "Portfolio Web",
      live_link: "https://spiffy-dodol-8de6b6.netlify.app/",
      github: "https://github.com/NileshPatil12/Portfolio",
    },
    {
      id: 4,
      logo: Mail,
      name: "MailJS Sender",
      live_link: "https://radiant-sable-c6d09e.netlify.app/",
      github: "https://github.com/NileshPatil12/EmailJs",
    },
    {
      id: 5,
      logo: Edtechlearn,
      name: "EdTechLearn",
      live_link: "https://edtechlearn.netlify.app/",
      github: "https://github.com/NileshPatil12/EduWeb",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-5">
          Portfolio
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Featured Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cardItem.map(({ id, logo, name, live_link, github }) => (
            <div
              key={id}
              className="max-w-xs mx-auto border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={logo}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                alt={name}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{name}</h2>
                <div className="flex justify-between items-center">
                  <a
                    href={live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
