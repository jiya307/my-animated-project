import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center text-white'>
      <div className='text-[10vw] uppercase justify-center flex items-center leading-[9.5vw]'>L'étincelle</div>

      <div className='text-[10vw] uppercase leading-[9.5vw] justify-center flex items-center'>qui<div className='h-[8vw] w-[16vw] rounded-full -mt-4 overflow-hidden'><Video /></div> génère</div>

      <div className='text-[10vw] uppercase justify-center flex items-center leading-[9.5vw]'> la créativité</div>
    </div>
  )
}

export default HomeHeroText