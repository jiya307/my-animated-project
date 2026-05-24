import React from 'react'
import Video from '../home/Video'
import HomeHeroText from '../home/HomeHeroText'
import HomeBottomText from '../home/HomeBottomText'

const Home = () => {
  return (
    <div className='fixed w-screen h-screen '>

      
      <Video />

      
      <div className='absolute top-0 flex  justify-center w-full h-full text-white'>
        <HomeHeroText />
    
        <HomeBottomText/>
      </div>

    </div>
  )
}

export default Home