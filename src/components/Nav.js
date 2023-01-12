import React,{ useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Nav = () => {
  
  const [menu,setMenu] = useState(false);
  const openMenu  = () => setMenu(!menu);

  return (
  <div className='fixed w-full text-white flex justify-between  items-center'>
  <div 
    className='text-3xl align-middle h-full px-4 pt-8 ml-1 pb-2  items-center drop-shadow-2xl
     bg-opacity-0 What we do in FoxChain
     hover:bg-opacity-100 bg-slate-600 text-yellow-50 hover:cursor-pointer '> 
      <h1>Artic<span className='font-bold text-sky-500'>Fox</span></h1>
  </div>

  <nav>
  {menu ? (
    <button
      className="flex  text-white bg-blue-600  scale-x-150 scale-y-160  items-center hover:bg-blue-300 cursor-pointer fixed right-6 top-6 z-50"
      onClick={() => setMenu(!menu)}>
      < CloseIcon />
    </button>
  ) : (
    <MenuIcon onClick={openMenu} className='scale-x-150 scale-y-160 absolute right-6 top-6 cursor-pointer hover:bg-blue-300 bg-blue-600  text-slate-100'/>
  )}

<div
  className={`top-0 right-0 md:w-[25vw] w-full fixed bg-gradient-to-br from-slate-500 to-slate-800   hover:bg-opacity-80  border-solid border-black drop-shadow-2xl 
   p-10 pl-5 text-white  h-full z-40 ease-in-out duration-300 center
   position: relative;-60 ${menu ? "translate-x-0 " : "translate-x-full" }`}>
   <div className='flex flex-col static ml-1  text-left justify-start text-slate-200 px-2 top-5 space-y-0'>
             <motion.h3 
               animate={{ fontSize: 50 }}
               className=' mb-14 font-sans align-middle pl-4 p-2 text-6xl mix-blend-overlay space-x-1 opacity-75'>
               MENU
             </motion.h3>
           <div className='hover:cursor-pointer  hover:text-black p-2 rounded-r-md transition-all hover:scale-110  hover:bg-slate-200  '>
             Home
           </div>
           <div className='hover:cursor-pointer hover:text-black p-2 rounded-r-md  hover:bg-slate-200  hover:scale-110 '>
             Services
           </div>
           <div className='hover:cursor-pointer hover:text-black p-2 rounded-r-md  hover:scale-110  hover:bg-slate-200 '>
             Careers
           </div>
           <div className='hover:cursor-pointer hover:text-black p-2 rounded-r-md  hover:scale-110  hover:bg-slate-200 '>
             Products
           </div>
           <div className='hover:cursor-pointer hover:text-black p-2 rounded-r-md  hover:scale-110  hover:bg-slate-200 '>
             About Us
           </div>
    </div>
    </div>
  </nav>
</div>
  )
}

export default Nav;




/*
 <div className='absolute right-6 top-6 scale-150'>
          {!menu ? <MenuIcon onClick={openMenu} className='hover:cursor-pointer w-5 drop-shadow scale-y-90 transition duration-150 ease-in  bg-blue-300 text-slate-100' /> : <></> }
          {/* <MenuIcon onClick={openMenu} className='scale-130 transition duration-150 ease-out  cursor-pointer bg-blue-300 text-slate-100'/> }
          </div>
          <div className='flex justify-end'>
            <div className=
            {!menu ? 'hidden ' : ' bg-[#001b34] bg-opacity-90 border-l-2  border-slate-600 justify-start fixed top-0  h-[100vh] md:w-[340px] w-[220px]'}>
          
          <div className='flex justify-end align-left pt-3 pr-5 '>
                   <CloseIcon fontSize='large' className='hover:cursor-pointer  hover:bg-blue-300 mt-6 justify-end items-end bg-[#001b34] bg-opacity-90 border-l-2  border-slate-600  fixed top-0  h-[100vh]  md:w-[340px] w-[220px]'
                    onClick={ handleClose } />
          </div>
                
          <div
          className='flex flex-col text-left justify-start text-red-800 px-2 top-5 space-y-1'>
             <h3 className='text-4xl text-bold mb-4 font-serif align-middle p-3'>
               MENU
             </h3>
           <div className='hover:cursor-pointer  hover:text-black p-2 rounded-sm  hover:bg-slate-200'>
             ABC
           </div>
           <div className='hover:cursor-pointer hover:text-black p-2 rounded-sm  hover:bg-slate-200'>
             DEF
           </div>
           <div className='hover:cursor-pointer hover:text-black p-2 rounded-sm  hover:bg-slate-200'>
             GHI
           </div>
              </div>
            </div>
          </div>
          */
  //  <div className='h-[80px] w-full fixed sticky top-0'>
  //     <div className=' flex bg-transparent items-center  justify-between relative mx-auto '>
  //       <h3 className='text-3xl align-middle h-full px-4 drop-shadow-md pt-8  items-center  bg-slate-600 text-yellow-50 rounded-bottom'>
  //         FoxChain
  //       </h3>
  //       <div className='flex pr-4  space-x-3 justify-end  items-center' onClick={openMenu}>
  //           {!menu ? <MenuIcon fontSize='large' className='hover:cursor-pointer w-5 drop-shadow  bg-blue-300 text-slate-100' /> : <></> }
  //       </div>
  //     </div>
  //     <div className='flex justify-end'>
  //        <div className={!menu ? 'hidden' : ' bg-slate-500 bg-opacity-90 border-l-2  border-slate-600 justify-start fixed top-0  h-screen  space-y-7 transition w-[300px]'}>
  //           <div className='flex justify-end align-left pt-3 pr-2'>
  //             <CloseIcon fontSize='large' className='hover:cursor-pointer w-5 bg-blue-300 mt-2 justify-end items-end'
  //              onClick={ handleClose } />
  //             </div>
  //         <div className='flex flex-col text-left justify-start text-red-800 px-2 space-y-7'>
  //           <h3 className='text-4xl text-bold font-serif align-middle p-3'>
  //             MENU
  //           </h3>
  //         <div className='hovertext-2xl text-bold :cursor-pointer  hover:text-black'>
  //           ABC
  //         </div>
  //         <div className='hover:cursor-pointer hover:text-black'>
  //           DEF
  //         </div>
  //         <div className='hover:cursor-pointer hover:text-black'>
  //           GHI
  //         </div>
  //         </div>
  //       </div>
  //     </div>
