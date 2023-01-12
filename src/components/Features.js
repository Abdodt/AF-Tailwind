
import React from 'react'


const features = () => {
  const bgimg = {
    backgroundImage: `url(https://images.unsplash.com/photo-1544085311-11a028465b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80)`
  }

  return (
    <div 
    style={bgimg}
    className='w-full pb-20  pt-8 bg-cover bg-fixed  bg-no-repeat bg-red-50'>
        <section 
        id='info my-1'
        className=''>
        <div className='flex justify-start mx-5'>
                    
        </div>
            <div className='flex md:flex-row flex-col justify-between p-4 max-w-full'>
                <div 
                className="flex md:w-1/2 md:mb-20 mb-2 mt-[5rem] md:drop-shadow-xl static  align-middle mr-1  pb-5 bg-slate-700 hover:bg-opacity-100  bg-opacity-90 ">
                  <div className="flex md:flex-col flex-col h-[90%]  space-x-0 p-3  mt-6 items-center align-middle">
                    <img 
                    src="https://png.pngtree.com/png-clipart/20190628/original/pngtree-blue-blockchain-technology-element-png-image_4036260.jpg" 
                    alt="bcImage"
                    className='w-[122px] items-center align-center mb-9 mt-9 align-middle'
                    />
                    <h2 className='text-center md:text-3xl md:mix-blend-overlay text-xl text-white'>
                      A decentralized business platform
                    </h2>
                    <p className='md:text-left p-3 text-justify text-white font-alegreya  mt-4'>
                    ArticFox is a platform where you can book freights and manage transportation as well as ease all financial managment.
                     It is powered by blockchain and makes businesses and transactions easier than ever.
                      <span className='md:flex hidden text-justify '>
                      With ArticFox, people from all over the world can connect with each other to find the best freight rates for their needs, 
                      without being limited to geographic location or time zone. The platform connects people who want to ship goods worldwide, which means it connects people who want to ship goods worldwide! You can also use ArticFox for your own personal shipping needs.The platform is built on blockchain technology, which means we use cryptography to ensure that our data is secure and cannot be changed or manipulated by anyone. We use Ethereum-based smart contracts to execute transactions, which means that all of your information will be stored on a secure distributed ledger. 
                      You can rest easy knowing that your data is safe from hackers and other malicious actors.  </span>
                    </p>
                  </div> 
                </div>
                <div className="flex flex-col md:w-1/2 ">
                  <div className="flex flex-row md:mt-[5rem] mt-3 p-4 pt-6 bg-[#07080899] hover:bg-opacity-100  md:bg-opacity-90 md:w-full w-full h-[38%]">
                      <div className="flex flex-col m-2 pb-4 pr-8  items-center align-middle my-auto ">
                      </div>
                      <div className="flex flex-col m-2 pb-4 pr-8  ">
                        <h2 className='text-3xl text-slate  font-semibold text-gray-300 sm:text-center mb-12'>
                          Financial Managment at it's easiest
                        </h2>
                        <p className='whitespace-normal text-center text-white font-alegreya'>
                        You can manage all your transaction and keep track of all your finances definitively. It is safe,secure, and user friendly.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint sapiente in, totam delectus quidem laudantium suscipit deleniti
                         eligendi consectetur eius itaque nihil inventore perspiciatis neque, corporis nesciunt ex nemo.
                        </p>
                      </div>
                  </div>
                  <div className="flex flex-row mt-1  p-4 pt-6  bg-slate-400 bg-opacity-90 hover:bg-opacity-100  w-full md:h-[39%] h-90 ">
                      <div className="flex flex-col m-2 pb-4 pr-8  items-center align-middle my-auto ">
                        <h3 className="text-3xl font-semibold text-gray-800 sm:text-center mb-1">
                          Making businesses more direct.
                        </h3>
                        <p className='whitespace-normal font-alegreya'>
                        You can manage all your transaction and keep track of all your finances definitively. It is safe,secure, and user friendly.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint sapiente in, totam delectus quidem laudantium suscipit deleniti
                         eligendi consectetur eius itaque nihil inventore perspiciatis neque, corporis nesciunt ex nemo.
                        </p>
                      </div>       
                  </div>
               
                </div>
            </div>
        </section>
    </div>
  )
}

export default features