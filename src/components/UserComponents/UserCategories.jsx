import React from 'react';
import UserBackIcon from '../Icons/UserBackIcon';
import UserNextIcon from '../Icons/UserNextIcon';
import { categoriesData } from '@/app/lib/Categories-Data';

const UserCategories = () => {
  return (
    <div className="flex flex-row  w-full h-90 min-h-90 ">
      <div className="w-15 flex items-center pl-7 pb-5 justify-center h-full  ">
        <UserBackIcon />
      </div>
      <div className="w-full flex flex-col ">
        <div className="w-full h-20 flex flex-row justify-between ">
          <div className=" w-40 h-13 pl-9 text-[32px] text-[#3D3D5D]">Categories</div>
          <div className="text-[21px] pr-8 w-25 h-9 text-[#25A5B4]">See All</div>
        </div>
        <div className="w-full h-50 flex md:flex-row flex-col items-center gap-1 justify-center ">
            
          {categoriesData.map((category) => {
            const { id, name, IconComponent, bgColor } = category;
            return (
              <div key={id} className="flex flex-col items-center justify-center  w-37 h-60 gap-5">
                <div className={`flex justify-center items-center ${bgColor} rounded-full w-24 h-24`}>
                  <IconComponent />
                </div>
                <span className="text-[#3D3D5D] text-[20px]">{name}</span>
              </div>
            );
          })}

        </div>
      </div>
      <div className="w-15 flex pr-7 pb-5 items-center justify-center h-full  ">
        <UserNextIcon />
      </div>
    </div>
  );
};

export default UserCategories;