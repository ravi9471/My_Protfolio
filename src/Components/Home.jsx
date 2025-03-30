import React from 'react'
//import './App.css'
import './Style.css'
import { motion } from "framer-motion";

function Home() {
  return (
    <>
        <div className= 'bg-zinc-950 flex justify-center items-center text-white relative h-130 w-screen top-17'>
                <div className='absolute flex-col justify-items-start  left-17'>
                    <div class="gradient-text relative top-3">
                        <h1>Ravi Kumar Tiwari</h1>
                    </div>
                    <div className='relative text-pink-600 text-3xl bg-gradient-to-l flex justify-center mt-3 pt-3'>
                        
                        <h2>Frontend Developer</h2>
                    </div>
                    <motion.div className='relative top-10 flex-col justify-center items-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p>Having good knowledge in frontend Development with 4 years of experience.</p>
                       <p> Furthermore i also worked in web development and worked for various projects </p>
                       <p> for clients. I'm passionate and experienced about creating great user interface,</p>
                       <p>custom components, and responsible designs and have a strong understanding of </p>
                       <p>usability and accessibility standards.</p>
                    </motion.div>
                </div>
                <div className="group image-container absolute w-100 h-100 border-b-4 rounded-lg shadow-lg animate-fadeInText right-39 transition duration-300">
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-red-600 blur-xl opacity-100"></div>
                    <img className="w-full h-full object-cover rounded-lg relative" src='Images\Profile.jpeg' alt="Profile" />
                </div>
                <hr></hr>
        </div>
    </>
  )
}

export default Home