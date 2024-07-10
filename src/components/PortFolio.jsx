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
    // {
    //   id: 5,
    //   logo: SQL,
    //   name: "Structured Query Language",
    //   live_link:"https://reactjs-website123.netlify.app/",
    //   github:"https://github.com/NileshPatil12/Shopzy-Ecommerce/",
    // },
    // {
    //   id: 6,
    //   logo: CPP,
    //   name: "C++",
    //   live_link:"https://reactjs-website123.netlify.app/",
    //   github:"https://github.com/NileshPatil12/Shopzy-Ecommerce/",
    // },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, live_link, github }) => (
            <div className="md:max-w-sm mx-auto border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={logo} className="w-full h-56 object-cover" alt={name} />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md transition duration-300"
                  >
                    Live
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-md transition duration-300"
                  >
                    Source code
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
