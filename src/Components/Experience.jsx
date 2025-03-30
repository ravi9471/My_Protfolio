import React from "react";
import "./Style.css";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="bg-zinc-950 text-white py-20">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Section Title */}
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-fuchsia-500 slide-text">Experience</h1>
        </div>

        {/* Experience 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-16">
          {/* Job Title */}
          <div className="text-xl font-semibold">
            <h2>Frontend Developer / Web Developer (React)</h2>
            <h3 className="text-fuchsia-400 mt-2">12/2021 - Present</h3>
          </div>

          {/* Job Description */}
          <motion.div
            className="mt-6 md:mt-0 md:w-2/3 text-lg leading-relaxed fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed, developed, and maintained user interfaces and custom components.</li>
              <li>Developed reusable UI components using HTML, CSS, JavaScript, React.js, and Redux.</li>
              <li>Collaborated with backend developers to integrate APIs and ensure seamless UI/UX.</li>
              <li>Created interactive and responsive designs with cross-browser compatibility.</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <hr className="border-fuchsia-600 my-10 opacity-50" />

        {/* Experience 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Job Title */}
          <div className="text-xl font-semibold">
            <h2>JavaScript Developer</h2>
            <h3 className="text-fuchsia-400 mt-2">08/2020 - 11/2021</h3>
          </div>

          {/* Job Description */}
          <motion.div
            className="mt-6 md:mt-0 md:w-2/3 text-lg leading-relaxed fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Worked as a JavaScript Developer for Nokia NFMP components.</li>
              <li>Performed validation, structuring, and formatting of API responses in JSON.</li>
              <li>Reviewed application requirements and documented changes.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
