import React from 'react'
import main from "../images/main.png"
const HeroSlider = () => {
  return (
    <div className='flex w-full justify-center items-center flex-wrap'>
        <div className='mx-auto my-auto'>
            <h1 className='md:text-[12rem] text-[5rem] font-[1000]'>DeFt</h1>
            <p className='font-semibold'>A Decentralized finance system</p>
            <p className='font-semibold'>Send Ethereum accross the world easily</p>
        </div>
        <div className='flex justify-center align-items-center sm:order-last'>
            <img className='md:w-[500px] w-[300px] md:h-[500px] h-[300px]' src={main} alt="Logo"/>
        </div>

    </div>
  )
}

export default HeroSlider