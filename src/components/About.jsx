import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white p-8 shadow-xl rounded-2xl space-y-8">
        <h1 className="text-4xl font-semibold text-gray-800 border-b-4 border-green-500 pb-2 text-center">
          About Me
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Hello, I'm <span className="font-semibold text-green-600">Nilesh</span>, a passionate Web Developer with a keen focus on the MERN Stack.  
          With a strong background in IT, I aim to deliver impactful and visually appealing software solutions that leave a lasting impression.
        </p>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Education
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>BE</strong> - Smt. Kashibai Navale College of Engineering, Vadgaon, Pune (2024)  
              <span className="text-gray-500"> [9.11 CGPA]</span>
            </li>
            <li>
              <strong>HSC</strong> - Sardar G G Junior College, Raver (2020)  
              <span className="text-gray-500"> [80.92%]</span>
            </li>
            <li>
              <strong>SSC</strong> - Sardar G G Highschool, Raver (2018)  
              <span className="text-gray-500"> [92.40%]</span>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-3">Skills</h2>
          <ul className="text-gray-600 list-disc ml-5 space-y-2">
            <li>Proficient in <strong>C++</strong> and <strong>Java</strong></li>
            <li>Experienced with the MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>Strong grasp of Object-Oriented Programming (OOP) concepts</li>
            <li>Excellent problem-solving and debugging skills</li>
            <li>Effective communicator and team collaborator</li>
            <li>Version control using <strong>GitHub</strong></li>
          </ul>
        </div>

        {/* Internship Experience */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Internship Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-800">
                Java Full Stack Web Developer - ExcelR Solutions
              </h3>
              <p className="text-gray-500">21 Aug 2024 - Current</p>
              <p className="text-gray-600">
                Working on tasks to learn and develop both frontend and backend 
                for websites using technologies like HTML, CSS, JavaScript, TailwindCSS, Bootstrap, React.js, GitHub, and Java for backend development.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800">
                MERN Stack Web Developer - VIEH Group
              </h3>
              <p className="text-gray-500">01 Jan 2023 - 21 Mar 2023</p>
              <p className="text-gray-600">
                Developed an e-commerce website using React.js, MongoDB, and Express.js with an interactive interface and efficient workflow.  
                Focused on building responsive designs and enhancing user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            Mission Statement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            My mission is to leverage my skills and creativity to deliver 
            innovative web development solutions that exceed client expectations and contribute positively to the digital landscape.  
            I am committed to continuous learning and growth, always seeking new challenges to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
