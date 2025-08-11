import React from 'react'
import HammerIcon from '../Icons/HammerIcon'
import SNextIcon from '../Icons/SNextIcon'
import SliderButton from '../Icons/SliderButton'
import Image from 'next/image'
import Slider1Button from '../Icons/Slider1Button'
import Slider2Button from '../Icons/Slider2Button'
import Slider3Button from '../Icons/Slider3Button'
import Slider4Button from '../Icons/Slider4Button'

const UserImage = () => {
  return (
    <div className=" w-full grid grid-cols-2 items-center justify-center px-10 py-3 gap-10 bg-gradient-to-br from-[#FFFFFF] to-[#FAFAFA] ">
        <div className="flex  w-full h-130 min-h-130 flex-col gap-2">
            <div className="flex w-full h-60 pl-18 gap-4 pt-10 flex-col ">
                <div className="text-[32px] text-[#484848] w-100 ">Iphone 6s, 10/10 condition..</div>
                <div className="text-[11px] text-[#8A8A8A] w-70  ">Lorem ipsum dolor sit amThis device is pre-owned and fully functional, with minor signs of use (if any). Available in multiple storage options and colors ...</div>
                <div className="w-40 h-11 bg-[#3F175F] rounded-lg flex flex-row items-center justify-center gap-3">
                    <HammerIcon/>
                    <span className='text-[#FFFFFF] text-[12px]  '>Place your Bid</span>
                    <SNextIcon/>
                </div>
            </div>
            <div className="flex flex-col gap-2 pl-18">
                <div className="text-[20px] text-[#484848] ">Auction Ending In</div>
                <div className="flex flex-row gap-2">
                    <div className="w-14 h-21  flex flex-col items-center">
                        <div className="w-14 h-14 text-[21px] rounded-lg text-[#25A5B4] bg-[#25A5B433] flex items-center justify-center ">04</div>
                        <div className=" text-[#3D3D5D] text-[16px] ">Hr</div>
                    </div>
                    <div className="w-14 h-21  flex flex-col items-center">
                        <div className="w-14 h-14 text-[21px] rounded-lg text-[#25A5B4] bg-[#25A5B433] flex items-center justify-center ">21</div>
                        <div className=" text-[#3D3D5D] text-[16px] ">Mins</div>
                    </div>
                    <div className="w-14 h-21  flex flex-col items-center">
                        <div className="w-14 h-14 text-[21px] rounded-lg text-[#25A5B4] bg-[#25A5B433] flex items-center justify-center ">04</div>
                        <div className=" text-[#3D3D5D] text-[16px] ">Sec</div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="flex flex-row  justify-between h-120 min-h-120 w-128 ">
            <div className="w-100 h-105  items-center gap-3 flex flex-col">
                <div className='w-100 h-100'>
                <Image src="Rectangle 9534.svg" width={400} height={400} alt="image"/>
                </div>
                <div className="flex flex-row gap-1">
                    <SliderButton/>
                    <Slider1Button/>
                    <Slider2Button/>
                    <Slider3Button/>
                    <Slider4Button/>
                </div>
            </div>
            <div className="w-21 h-100 flex flex-col justify-between bg-white  ">
                <div className='w-21 h-21'>
                <Image src="Rectangle 9535.svg" width={84} height={84} alt="image"/>
                </div>
                <div className='w-21 h-21'>
                <Image src="Rectangle 9535.svg" width={84} height={84} alt="image"/>
                </div>
                <div className='w-21 h-21'>
                <Image src="Rectangle 9535.svg" width={84} height={84} alt="image"/>
                </div>
                <div className='w-21 h-21'>
                <Image src="Rectangle 9535.svg" width={84} height={84} alt="image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserImage