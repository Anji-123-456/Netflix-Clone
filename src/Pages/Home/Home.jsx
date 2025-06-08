import React from 'react'
import './Home.css'
import Navbar from  '../../Component/Navbar/Navbar'
import  Hero from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Card from '../../Component/Cards/Card'
import Footer from '../../Component/Footer/Footer'
const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className="hero">
        <img src={Hero} alt="" className='hero-banner' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='hero-title' />
          <p>Discovering his ties to a secret ancient order, a young man living in a modern
            Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="button">
            <button className="button1"><img src={play} alt="" />Play</button>
            <button className='button2'><img src={info}alt="" />More Info</button>
             </div>
           </div>
       </div>
            <Card/>
            <div className='more-cards'>
              <Card title={"Blockbuster Movies"} category={"popular"}/>
               <Card title={"Only On Netflix"} category={"top_rated"}/>
               <Card title={"Upcoming Movies"} category={"upcoming"}/> 
               <Card title={"More Pics For You"} category={"now_playing"}/>
            </div>
            <Footer/>
            </div>
              
  )
}

export default Home
