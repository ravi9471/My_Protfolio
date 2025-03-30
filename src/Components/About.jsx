import React from "react";
import "./Style.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-zinc-950 text-white py-20">
      {/* Section Title */}
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-fuchsia-500 slide-text">
          A Little Bit About Me
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-screen-lg mx-auto mt-12">
        {/* Profile Image with Animation */}
        <motion.div
          className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-lg shadow-lg overflow-hidden border-4 border-green-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img className="w-full h-full object-cover" src='Images\Profile.jpeg' alt="Profile" />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="mt-8 md:mt-0 md:ml-16 max-w-lg text-lg leading-relaxed fade-in"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p>
            I am a passionate <span className="text-fuchsia-400">Frontend Developer</span> with 4 years of experience in web development.
          </p>
          <p className="mt-3">
            I have worked on various projects, building <span className="text-fuchsia-400">responsive and dynamic user interfaces</span>.
          </p>
          <p className="mt-3">
            My expertise includes <span className="text-fuchsia-400">React.js, Redux, JavaScript, HTML, and CSS</span>. I specialize in creating custom components and interactive UI/UX experiences.
          </p>
          <p className="mt-3">
            I am highly skilled in <span className="text-fuchsia-400">usability and accessibility standards</span>, ensuring high-quality experiences for all users.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
