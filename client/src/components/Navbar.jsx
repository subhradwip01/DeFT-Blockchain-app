import React, { useState } from 'react'
import logo from "../images/logo.png"
import {AiOutlineClose} from "react-icons/ai"
import {HiMenuAlt4} from "react-icons/hi"

const NavItem=({title, classProps})=>{
  return (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    {title}
  </li>
  )
}

const Navbar = () => {
  const [toggleMenu,setTogglesMenu]=useState(false)
  const menu=[{
    name:"Home",
    path:"/",
  },
{
  name:"Explore",
  path:"link.."
},{
  name:"Transactions",
  path:"/transaction"
}]
  return (
    <nav className="w-full flex justify-between items-center p-4">
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <div className='flex items-center justify-center'>
      <img src={logo} alt="logo" className='w-12 cursor-pointer'/>
      <p className='text-black text-2xl font-bold pl-1.5'>DeFT</p>
      </div>
      </div>
      <ul className="text-black hover:text-base md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {menu.map((item,i)=>(
          <NavItem key={item+i} title={item.name}></NavItem>
        ))}
        </ul>
        <div className='flex relative'>
          {!toggleMenu
          ? <HiMenuAlt4 fontSize={28} className="text-black md:hidden cursor-pointer" onClick={()=>setTogglesMenu(!toggleMenu)}/>
         : null}
         {toggleMenu && 
         <ul className='z-10 fixed top-0 -right-2 p-3 w-[70w] h-screen shadow-2xl md:hidden list-none
         flex flex-col justify-start items-end rounded-md blue-glassmorphism text-black animate-slide-in'>
           <li><AiOutlineClose fontSize={28} className="text-black md:hidden cursor-pointer" onClick={()=>setTogglesMenu(!toggleMenu)}/></li>
           {menu.map((item,i)=>(
          <NavItem key={item+i} title={item.name} classProps="my-2 text-lg text-black"></NavItem>
        ))}
           </ul>}

        </div>
  
      
      
    </nav>
  )
}

export default Navbar