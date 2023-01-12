import React from 'react'



const Info = () => {
  return (
    <div className='w-full bg-gradient-to-b from-zinc-700 via-grey-600 to-slate-500 pb-5 bg-scroll'>
        <div className="align-middle  justify-start pb-6">
            <h1 className='flex ms:justify-start justify-start mix-blend-transform font-poiret text-left text-6xl ml-8 pt-16 '>
                <span className='bg-clip-text text-transparent bg-gradient-to-t from-yellow-100 to-yellow-50'>
                    What we do in FoxChain
                </span>
            </h1>
            <div className='flex w-full mt-[5rem]'>
                <div 
                    className="flex flex-row md:w-1/2 items-left h-[30%]  p-5 mt-2">
                    <div    
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1602009775595-f35cf45d9f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")'
                        }}
                     className="bg-auto w-[67%] h-[44rem] top-[7.6%]  transition-all  bg-scroll bg-no-repeat  justify-start align-middle py-20 md:visible invisible  hover:scale-105 "
                  >
                    </div>
                </div>
                    <div className="md:flex-row md:w-1/2 p-5 justify-center">
                        <p className='mt-10 max-w-prose md:text-right text-center md:text-[22px] text-xl  leading-9 text-mono mr-8 text-slate-200 font-alegreya '>
                        FOXCHAIN is a particular smart-contract platform that offers the world's first business oriented digital ledger, which is guaranteed to radically transform all kinds of business 
                        organization and values as a leader in trade and transportation, safekeeping and security maintenance by offering you a decentralized commerce ecosystem reinforced by various FOXCHAIN Keepers, provides 
                        innovative solutions for smooth business dealings between Corporates/ Institutions, Suppliers/Vendors and Shippers/Buyers, through the facilitation Our global, distributed secure electronic-voting and 
                        digital transactions platform designed using blockchain technologies, based on trust and consensus, allowing SMEs to trade with greater efficiency while keeping an immutable record of results throughout the entire supply chain.
                         FoxChain’s mission is to build a global blockchain-based supply chain ecosystem that allows businesses to trade with greater efficiency while keeping an immutable record of results. The solution is designed to help businesses reduce costs, 
                        improve transparency and efficiency while providing an immutable record of results throughout the entire supply chain.
                        </p>
                    </div>


            </div>
        </div>
    </div>
  )
}

export default Info