import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="bg-white dark:bg-gray-800 p-8 shadow-xl rounded-2xl space-y-8 transition-colors">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 border-b-4 border-green-500 pb-2 text-center">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Hello, I'm{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">Nilesh Patil</span>, a
          passionate <strong>Full Stack Developer</strong> experienced with
          <strong> MERN Stack</strong>, <strong>Java</strong>, and{" "}
          <strong>Spring Boot</strong>. I enjoy building scalable applications,
          writing clean code, and transforming ideas into real-world digital
          products.
        </p>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
            Education
          </h2>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              <strong>BE – Computer Engineering</strong> – Smt. Kashibai Navale
              College of Engineering, Pune (2024)
              <span className="text-gray-500"> [CGPA: 9.11]</span>
            </li>
            <li>
              <strong>HSC</strong> – Sardar G G Junior College, Raver (2020)
              <span className="text-gray-500"> [80.92%]</span>
            </li>
            <li>
              <strong>SSC</strong> – Sardar G G Highschool, Raver (2018)
              <span className="text-gray-500"> [92.40%]</span>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">Skills</h2>
          <ul className="text-gray-600 dark:text-gray-300 list-disc ml-5 space-y-2">
            <li>Strong in <strong>C++</strong> and <strong>Java</strong></li>
            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>Backend: Spring Boot, Hibernate, JDBC</li>
            <li>Frontend: HTML, CSS, Bootstrap, TailwindCSS, JavaScript</li>
            <li>Machine Learning (Python, Pandas, SVM Models)</li>
            <li>Version Control: <strong>Git & GitHub</strong></li>
            <li>Good understanding of OOP, DSA, DBMS, OS, and CN</li>
          </ul>
        </div>

        {/* Cognizant Experience */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Programmer Analyst Trainee – Cognizant
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Jun 2025 – Present</p>
              <p className="text-gray-600 dark:text-gray-300">
                Contributing to application development and enhancement using
                technologies like <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>SQL</strong>, and
                <strong> React.js</strong>. Worked on debugging, code
                optimization, writing scalable backend logic, and collaborating
                in an Agile environment with cross-functional teams.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Full Stack Developer – ExcelR EdTech Pvt. Ltd.
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Aug 2024 – May 2025</p>
              <p className="text-gray-600 dark:text-gray-300">
                Building web applications using ReactJS (Frontend) and Java,
                Spring, and SQL (Backend). Working on real-time projects and
                client-driven tasks.
              </p>
            </div>

            {/* Previous Internships */}
            <div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">
                Full Stack Developer Intern – VIEH Group
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Mar 2023 – May 2023</p>
              <p className="text-gray-600 dark:text-gray-300">
                Developed an e-commerce web application using the MERN Stack and
                created responsive UI with efficient state management.
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
            Languages
          </h2>
          <ul className="text-gray-600 dark:text-gray-300 list-disc ml-5 space-y-2">
            <li>Marathi</li>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-3">
            Mission Statement
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            My mission is to build impactful and scalable digital solutions,
            continuously learn modern technologies, and deliver high-quality
            applications that create meaningful user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(About);
