import React from 'react'
import { Navbar,Payment,Footer,Services,Transactions, HeroSlider } from './components'

const App = () => {
  return (
    <div className='min-hscreen'>
      <div className='bg-[#F6F0F5]'>
        <Navbar/>
        <HeroSlider/>
        <Payment/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
     
    </div>
  )
}

export default App