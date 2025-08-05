import React from 'react'
import Image from "next/image";
const AdminPage = () => {
  return (
    <div className='bg-amber-300 flex  justify-center w-full h-screen'>
      <div className="w-full max-w-6xl h-20 bg-[#e6ebef] min-h-20 px-2 py-2 flex items-center justify-center">
        <div className="w-[1050px] h-[65px] flex flex-row  items-center justify-between pr-4 bg-white rounded-r-full pl-4  ">
          <input className='bg-gray-200 w-50 h-10 pl-2 rounded-xl ' type='search' placeholder='🔎︎ Search'/>
          <div className=" flex flex-row items-center gap-3">
            <Image className='rounded-full' src="bell.svg" alt="logo" width={25} height={25} />
            <Image className=' rounded-full' src="/dp.jpg" alt="logo" width={35} height={40}/>
            <p className=" text-md font-semibold">Mr Alex Johns</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage