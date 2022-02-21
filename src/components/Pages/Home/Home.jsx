import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { Main } from '../../Layout/Main/Main'
import './../Home/Home.css'

export const Home = () => {
  return (
    <div className="Back">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default Home;