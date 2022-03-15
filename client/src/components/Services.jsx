import React from 'react'
import {BsShieldFillCheck} from "react-icons/bs"
import {RiHeart2Fill} from "react-icons/ri"
import {FaHandsHelping} from "react-icons/fa"

const ServiceCard=({color,title,icon,subtitle})=>(
  <div className='flex flex-row justify-start items-center py-3 px-6 m-2 cursor-pointer hover:shadow-xl rounded-md bg-[#F7F8FA] md:w-[60%] w-[80%]'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h1 className="mt-5 text-black text-lg">{title}</h1>
      <p className='mt-3 text-black text-sm md:w-9/12 '>{subtitle}</p>

    </div>

  </div>
)


const Services = () => {
  return (
    <div className='flex w-full justify-center items-center flex-wrap'>
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-black text-3xl sm:text-5xl py-2 font-semibold">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-black font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center mt-7'>
        <ServiceCard
          color="bg-[#FAEAF1]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={22}/>}
          subtitle="100% Security is Gaurentedd. We always ensure users pravicy."
        />
        <ServiceCard
          color="bg-[#FAEAF1]"
          title="24/7 helpdesk"
          icon={<FaHandsHelping fontSize={22}/>}
          subtitle="Always availbale for any issue faced by customers."
        />
        <ServiceCard
          color="bg-[#FAEAF1]"
          title="Customer Satisfaction"
          icon={<RiHeart2Fill fontSize={22}/>}
          subtitle="Customer Satisfaction is our moto"
        />
      </div>
    </div>
  )
}

export default Services