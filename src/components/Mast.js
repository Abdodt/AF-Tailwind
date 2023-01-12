import React, { useState, useEffect } from 'react'
import imageSlides from '../assets/imageData';
import { motion } from 'framer-motion';
import { 
  Animator,
  ScrollContainer,
  ScrollPage, 
  Sticky,
  batch,
  Fade,
  MoveOut,

  } from 'react-scroll-motion'


const Mast = () => {
  const [currentState, setCurrentState] = useState(0);
  // const [checked, setChecked] = useState(false);
  // useEffect(() => {
  //   setChecked(true);
  // }, []);

  useEffect(()=>{
    const timer = setTimeout(()=>{
    if(currentState===2)
    {
      setCurrentState(0)
    }
    else{
      setCurrentState(currentState+1)
    }
  },5000)
  return ()=> clearTimeout(timer)
  },[currentState])


return (
    <div  className="w-full border-b-4 border-stone-900 ">
      <div 
      id="mast"    
      className="bg-cover md:bg-center bg-center h-screen bg-fixed  w-full bg-no-repeat flex justify-center">
        <div
         className='text-center align-left flex justify-center w-full mx-auto md:mt-[18%] mt-[45%] fixed'>
      <ScrollContainer>
      <ScrollPage>
      <Animator animation={batch(Sticky(),Fade(),MoveOut(0,-650))} >
        <div 
        className='p-6 pb-9 md:ml-8 m-4 mb-[5%] sm:justify-center bg-opacity-60  o'>
            <motion.h1  
            animate={{ fontSize:"4rem", opacity: 2}}
            className=' text-white font-semibold font-sans m-2 md:text-center t
            px-8 py-5 bg-opacity-75 mb-5 '>
            To move your Freights..
            </motion.h1>
            <p className='text-white text-center mb-14 transition-opacity ease-in-out delay-500 '>
              {imageSlides[currentState].title}
            </p>
          <motion.button
          animate={{
            x: 0, y :-20
          }}
          className=' text-white animate-bounce px-5 py-3 rounded-full  border-2 text-xl hover:animate-none hover:bg-slate-200 hover:text-black hover:border-black ' >
            Get Started
          </motion.button>
      </div>
      </Animator>
      </ScrollPage>
    </ScrollContainer>
    </div>
      </div>    
    </div>
  )
}

export default Mast;