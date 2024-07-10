import React from "react";
import CPP from "../../public/CPP.png";
import SQL from "../../public/SQL.png";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import Mail from "../../public/Project/Mail.png"
import Portfolio from "../../public/Project/Portfolio.png"
import Shopzy from "../../public/Project/Shopzy.png"
import Weather from "../../public/Project/Weather.png"


function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: Shopzy,
      name: "Shopzy Ecom",
      live_link:"https://reactjs-website123.netlify.app/",
      github:"https://github.com/NileshPatil12/Shopzy-Ecommerce/",
    },
    {
      id: 2,
      logo: Weather,
      name: "Weather app",
      live_link:"https://weather-reportz.netlify.app/",
      github:"https://github.com/NileshPatil12/Weather-App",
    },
    {
      id: 3,
      logo: Portfolio,
      name: "Portfolio Web",
      live_link:"https://spiffy-dodol-8de6b6.netlify.app/",
      github:"https://github.com/NileshPatil12/Portfolio",
    },
    {
      id: 4,
      logo: Mail,
      name: "MailJS Sender",
      live_link:"https://radiant-sable-c6d09e.netlify.app/",
      github:"https://github.com/NileshPatil12/EmailJs",
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
          {cardItem.map(({ id, logo, name ,live_link,github}) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                
                <p className="px-2 text-gray-700">
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={live_link} target={"_blank"}>
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Live
                </button>
                </a>
                <a href={github} target={"_blank"}>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
