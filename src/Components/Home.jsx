import React from "react";
import "./Style.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="bg-zinc-950 flex flex-col md:flex-row justify-center items-center text-white relative min-h-screen px-6 md:px-12">
        {/* Left Section - Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="gradient-text">
            <h1 className="text-4xl md:text-5xl font-bold">Ravi Kumar Tiwari</h1>
          </div>
          <div className="text-pink-600 text-2xl md:text-3xl mt-3">
            <h2>Frontend Developer</h2>
          </div>
          <motion.div
            className="mt-6 text-lg md:text-xl max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p>
              Having good knowledge in frontend development with 4 years of experience.
            </p>
            <p>
              Furthermore, I have worked on web development projects for various clients.
            </p>
            <p>
              I'm passionate about creating great user interfaces, custom components, and
              responsive designs, with a strong understanding of usability and accessibility
              standards.
            </p>
          </motion.div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="relative mt-8 md:mt-0 md:ml-12">
          {/* Glowing Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-red-600 blur-xl opacity-70 rounded-lg"></div>
          <img
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg relative shadow-lg"
            src="/Images/Profile.jpeg"
            alt="Profile"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
