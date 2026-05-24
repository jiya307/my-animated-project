import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {
  const imageDivRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
     gsap.to(imageDivRef.current,{
    scrollTrigger:{
      trigger:imageDivRef.current,
      markers:true,
      start:'top 36%',
      end:'top -125%',
      scrub:true,
      pin:true
    }
     } )
  })

  return (
    
  <div>
     <div className='section1'>
    <div  ref={imageDivRef} className='h-[20vw] overflow-hidden top-96 left-[30vw] absolute w-[15vw] rounded-4xl '>
      <img className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64" alt="" />
    </div>
    <div className='relative font-[font2]'>
     
     <div className='mt-[55vh] ' >
      <h1 className='text-[17vw] uppercase leading-[17vw]'>Sonixan7e <br />
      Douze
      </h1>

     </div>
     <div className='pl-[40%] mt-20'>
      <p className='text-5xl '>&nbsp;"Notre curiosité 
        &nbsp;nourrit notre 
        &nbsp;créativité. On reste
         &nbsp;humbles et on dit 
         &nbsp;non aux gros egos,
         &nbsp; même le vôtre. Une
           &nbsp; marque est vivante.
           &nbsp; Elle a des valeurs,
          &nbsp;une personnalité,
             &nbsp; une histoire. Si on
              &nbsp; oublie ça, on peut 
               &nbsp;faire de bons 
               chiffres à court
                terme, mais on la tue
                 à long terme. C’est 
                 pour ça qu’on 
                 s’engage à donner 
                 de la perspective,
                  pour bâtir des
                   marques influentes."</p>
        

     </div>
      </div>
  </div>
  <div className='section2 h-screen'></div>
  
  </div>
  )
}

export default Agence
