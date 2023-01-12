import React from 'react'
import techInfo from '../assets/techinfo';
import './Cards.css'


const Cards = () => {

    return (
    <div className='w-full bg-gradient-to-b from-slate-700 to-slate-500 bg-local pb-8'>
            <div className="justify-center ">
                <h1 className="md:text-left text-center align-middle text-5xl pt-20 ml-8 font-secularOne ">
                    <span className='bg-clip-text text-transparent bg-gradient-to-t from-slate-200 to-yellow-50'>
                Imbuded With
                    </span>
                </h1>
            </div>
        <div className="flex space-x-3 align-middle items-center justify-center text-center mt-6">
            <div 
            className='grid md:grid-cols-3 grid-cols-2   mt-14 '>
           {techInfo.map((data) => (
             <div className=" mt-4 mx-3 flex-col   p-5 hover:cursor-pointer hover:scale-105 ease-in-out duration-300  ">
                <img
              className='md:h-[12rem] h-[8rem]  md:w-[23rem] w-[13rem] inline-block cursor-pointer hover:scale-105  ease-in-out duration-300 '
              src={data.url}
              alt=''/>
              <div className='md:flex flex-col bg-black md:w-[23rem] w-[13rem] md:h-[15rem]  h-[6rem]  pt-4 p-3 bg-opacity-60 text-white ' >
                    <h3 className='text-xl pt-4 font-cantarell '>
                        {data.title}
                    </h3>
                    <p className='pt-4 text-justify text-[14px] md:max-w-prose md:visible invisible whitespace-no-wrap  ' >
                        {data.info}
                    </p>
              </div>
           </div>
           ))}
            </div>
        </div>
    </div>
  )
}

export default Cards