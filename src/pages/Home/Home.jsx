import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_banner2 from '../../assets/hero_banner2.jpg'
import hero_banner3 from '../../assets/image.png'
import hero_banner4 from '../../assets/hero_banner4.jpg'
import hero_banner5 from '../../assets/hero_banner5.jpg'
import hero_title from '../../assets/hero_title.png'
import hero_title2 from '../../assets/hero_title2.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/> 
      <div className="hero">
        <img src={hero_banner5} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title2} alt="" className='caption-img'/>
          <p>Hundreds compete in deadly children's games for a life-changing prize. Survival is the only rule </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
          <TitleCards title={"BlockBuster Movies"} category={"top_rated"} />
          <TitleCards title={"Only On Netflix"} category={"popular"} />
          <TitleCards title={"UpComing"} category={"upcoming"} />
          <TitleCards title={"Top Picks For You"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
 