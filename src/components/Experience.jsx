import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import CPP from "../../public/CPP.png";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
import SQL from "../../public/SQL.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: CPP,
      name: "C++",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: SQL,
      name: "SQL",
    },
    {
      id: 6,
      logo: reactjs,
      name: "ReactJs",
    },
    {
      id: 7,
      logo: node,
      name: "NodeJs",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills Experience</h1>
        <p className="  ">
          I've more than 2 years of experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
