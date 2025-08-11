import React from 'react'
import SearchIcon from '../Icons/SearchIcon';
import FilterIcon from '../Icons/FilterIcon';

const Admin1Main = () => {
  return (
    <>
      <div className="flex flex-col w-full h-20 bg-[#e6ebef] ">
        <div className="flex items-center w-20 h-7  pl-3">
          <span className="font-semibold text-[23px] pt-4 text-[#3F175F]">Users</span>
        </div>
        <div className="flex flex-row items-center w-full  justify-between pl-3">
          <div className="flex flex-row w-50">
            <span className="text-[19px] w-21 text-[#4D4D4D]">All Users </span>
            <span className="text-[14px] pt-1 text-[#101828]">(2 rows selected)</span>
          </div>
          <div className="flex flex-row gap-3 items-center  pr-5 h-12">
            <div className="relative mt-1 flex items-center pb-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center  pl-3">
                <SearchIcon />
              </div>
              <input
                className="bg-white w-50 h-8 pl-9 rounded-lg "
                type="search"
                placeholder="Search User..."
              />
            </div>
            <div className="flex items-center flex-row w-22 h-8 justify-center gap-1 bg-white rounded-lg">
              <FilterIcon/>
              <span className="text-[#667085]">Filters</span>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Admin1Main