import React from 'react'
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='flex w-70 justify-center items-center min-w-70 h-screen bg-[#e6ebef]'>
      <div className="flex flex-col h-165 w-65 bg-black rounded-3xl justify-between pb-10">
        <div className="pl-8 pt-15 flex flex-col gap-20">
          <div className="text-white font-semibold text-3xl">Logo</div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Image className="w-5  h-5 rounded-full" src="layout-panel-left.svg" width={16} height={8} alt="logo"/>
              <p className='text-white'>Dashboard</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image className="w-5 h-5 rounded-full" src="users.svg" width={16} height={8} alt="logo"/>
              <p className='text-white'>Users</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Image className="w-5 h-5" src="clipboard-list.svg" width={16} height={8} alt="logo"/>
              <p className='text-white'>Items</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <Image className="w-6 h-6" src="star.svg" width={16} height={8} alt="logo"/>
              <p className='text-white'>Categories</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row pl-8 items-center">
          <div className="flex flex-row items-center gap-1">
              <Image className="w-6 h-6 rounded-full" src="/logout.jpeg" width={16} height={8} alt="logo"/>
              <p className='text-red-300'>Logout</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar