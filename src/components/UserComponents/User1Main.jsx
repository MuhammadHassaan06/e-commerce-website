import React from 'react'
import Image from 'next/image'

const User1Main = () => {
  return (<div className=' md:py-22 '>
  
    <div className="flex relative overflow-hidden pl-10 items-center bg-[#25A5B433] md:w-330 w-[350px] h-125 min-h-125 rounded-3xl md:p-20">
        <div className="md:flex flex-col  w-[500px] h-70">
          <span className='md:text-6xl text-4xl text-[#1A1A1ACC] font-semibold '>Find It. Buy it.</span><br/>
          <span className='text-[#1A1A1AB2] md:text-2xl text-lg '>Promote sustainable buying, connect directly with trusted sellers, and find unique items that tell a story.</span>
        </div>
        <Image src="Blob.svg" width={330} height={400} alt="" className="absolute left-0 pb-53 size-125"/>
        <Image src="Shape bg.svg" width={320} height={200} alt="" className="absolute right-7 bottom-0 hidden md:block "/>
      </div>
  </div>
  )
}

export default User1Main