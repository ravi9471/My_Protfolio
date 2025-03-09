import React from 'react'
import Gmail from '../Images/Gmail.jpg'
import Linkdin from '../Images/Linkdin.png'
import Gitimage from '../Images/Gitimage.png'
import './Style.css';



function Contacts() {
  return (
    <div className='flex-col justify-items-center h-90 w-screen bg-zinc-950 text-white pt-9'>
        <div className='text-center'>
            <h1 className='mt-3 pb-3'>Get In Touch</h1>
            <p className='mt-3 pb-3'>9875562904</p>
            <p className='mt-3 pb-3'>rktiwari9471@gmail.com</p>
        </div>
        <div className="flex justify-center space-x-6 mt-5">
          <a href="https://www.linkedin.com/in/ravi-kumar-tiwari-8b1772185" target="_blank" rel="noopener noreferrer">
            <img className="h-13 w-13 rounded-full" src={Linkdin} alt="LinkedIn" />
          </a>
            <img className="h-13 w-13 rounded-full" src={Gitimage} alt="GitHub" />
            <img className="h-13 w-13 rounded-full" src={Gmail} alt="Gmail" />
        </div>
        
    </div>
  )
}

export default Contacts