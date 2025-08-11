import React from 'react';
import Image from 'next/image';
import RedHeartIcon from '../Icons/RedHeartIcon';
import WhiteHeartIcon from '../Icons/WhiteHeartIcon';
import { recommendedItemsData } from '@/app/lib/Recommented-Items';

const UserItems = () => {
  return (
    <div className="flex w-full h-100 items-center justify-center min-h-100 ">
      <div className="flex flex-col w-full max-w-[1180px]  gap-2 h-90">
        <div className="flex flex-row justify-between pl-5 pr-5 ">
          <div className="text-[#3D3D5D] text-[32px] ">Recommended For You</div>
          <div className="text-[#25A5B4] text-[21px] ">See All</div>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">

          {recommendedItemsData.map((item) => (
            <div key={item.id} className="w-70 h-69 min-w-70 min-h-69 flex flex-col  rounded-lg shadow-2xl relative">
              <div className="absolute right-2 top-2">
                {item.isFavorited ? <RedHeartIcon /> : <WhiteHeartIcon />}
              </div>
              <Image src={item.imageSrc} width={300} height={5} alt="Product Image" />
              <div className="flex flex-col ">
                <div className="flex flex-row pl-2 pr-2 justify-between">
                  <div className="text-[21px] ">{item.price}</div>
                  <div className="text-[15px] text-[#0000004D] ">{item.timestamp}</div>
                </div>
                <div className=" pl-2 text-[18px] text-[#000000B2]">{item.title}</div>
                <div className="pl-2 text-[15px] text-[#0000004D]">{item.location}</div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default UserItems;