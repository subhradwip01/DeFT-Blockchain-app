import React from 'react'
import { HeroSlider, Payment, Services, Transactions } from '../components/index'

const Home = () => {
  return (
    <div>
        <HeroSlider/>
        <Payment/>
        <Services/>
        <Transactions smplified="true"/>
    </div>
  )
}

export default Home