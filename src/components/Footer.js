import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#020325]'>
        <h3 className='text-2xl font-nanum text-slate-300 text-left pt-10 pl-8'> 
            ArticFox Technologies
          </h3>
        <div className="flex pt-7 p-5 w-full">
          <div className="flex-col p-5 w-1/2  border-r-2 hover:cursor-pointer ">
            <h4 className='text-xl text-left text-white font-secularOne'>
              Quick Links
            </h4>
            <ul className='mt-12 text-left text-white space-y-2'>
              <li className=''><a href="hover:text-darkGrayishBlue hover:cursor-pointer ">Home</a></li>
              <li className='hover:text-darkGrayishBlue hover:cursor-pointer'>Careers</li>
              <li className='hover:text-darkGrayishBlue hover:cursor-pointer'>Office</li>
              <li className='hover:text-darkGrayishBlue hover:cursor-pointer'>Locations</li>
              <li className='hover:text-darkGrayishBlue hover:cursor-pointer'>About us</li>
            </ul>
            <h3 className='text-xl text-left text-white font-secularOn mt-8'>
              Socials
            </h3>
          </div>
          
          <div className='w-1/2 flex-row ml-6 pt-8'>
            <h2 className='font-bold text-3xl text-white mb-8'>
              Socials
            </h2>
            <div className='flex-row'>
            <form className='md:flex-row flex-col align-bottom justify-end md:visible'>
              <div class="flex space-x-3">
                <input
                  type="text"
                  class=" px-2 rounded-full focus:outline-none md:w-[20rem] w-10 "
                  placeholder="Subscribe"
                  />
                <button
                  class="px-6 py-2 text-white rounded-full bg-indigo-300 hover:bg-brightRedLight focus:outline-none"
                  >
                  Go
                </button>
              </div>
            </form>
                  </div>
            <div class="hidden text-white md:block mt-4 ">
              Copyright &copy; 2023,All Rights Reserved
            </div>
          </div>
        </div>
    </div>
   
  )
}

export default Footer