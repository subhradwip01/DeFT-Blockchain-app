import React from 'react'
import {FaInstagram,FaLinkedinIn,FaGithub,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='text-center text-white py-10 bg-[#E37C90]'>
      <div className='flex items-ceter justify-center'>
        <a href="https://www.instagram.com/ig_subhradwip/" className='m-3'><FaInstagram fontSize={30}/></a>
        <a href="https://www.linkedin.com/in/subhradwip-kulavi-1a8040212" target="_blank" className='m-3'><FaLinkedinIn fontSize={30}/></a>
        <a href="https://github.com/subhradwip01" target="_blank" className='m-3'><FaGithub fontSize={30}/></a>
        <a href="https://twitter.com/Subhradwip7" target="_blank" className='m-3'><FaTwitter fontSize={30}/></a>
      </div>
      <h2 className='font-semibold'>Made With 💝</h2>
      <p className="">All rights reserved</p>
      <p></p>
    </div>
  )
}

export default Footer