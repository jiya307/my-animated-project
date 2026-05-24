import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (

    <div className='absolute bottom-10 w-full flex justify-center gap-5 font-[font2]'>

      <Link
        to="/Project"
        className='px-8 hover:border-[#D3FD50] hover:text-[#D3FD50] py-2 text-[6.5vw] leading-tight border-2 border-white rounded-full uppercase'
      >
        Projects
      </Link>

      <Link
        to="/Agence"
        className='px-8 hover:border-[#D3FD50] hover:text-[#D3FD50] py-2 text-[6.5vw] leading-tight border-2 border-white rounded-full uppercase'
      >
        Agence
      </Link>

    </div>
  )
}

export default HomeBottomText