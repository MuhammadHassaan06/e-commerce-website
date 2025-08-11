import React from 'react'
import Image from "next/image";
import NotificationIcon from '@/components/Icons/NotificationIcon';
import SearchIcon from '@/components/Icons/SearchIcon';

const AdminHeader = () => {
  return (
    <div className="w-full max-w-6xl h-20 bg-[#e6ebef] min-h-20 px-2 py-2 flex items-center justify-center">
        <div className="w-[1110px] h-[65px] flex flex-row  items-center justify-between pr-4 bg-white rounded-[20px_40px_40px_20px] pl-4  ">
          <div className="relative mt-1 flex items-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pt-1 pl-3">
              <SearchIcon/>
            </div>
          <input className='bg-gray-200 w-50 h-10 pl-9 rounded-xl ' type='search' placeholder='Search'/>
          </div>
            <div className=" flex flex-row items-center gap-3">
            <NotificationIcon/>
            <Image className=' rounded-full' src="/dp.jpg" alt="logo" width={40} height={40}/>
            <p className=" text-md font-semibold">Mr Alex Johns</p>
          </div>
        </div>
      </div>
  )
}

export default AdminHeader