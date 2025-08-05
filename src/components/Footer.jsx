import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='flex bg-[#e6ebef] w-full justify-center items-center'>
      {/* Box1 */}
      <div className="flex flex-row gap-2 items-center w-330 px-8 rounded-xl py-8 bg-[#3f175f] justify-center max-w-8xl">
        <div className="flex flex-col justify-between pt-10 pb-8 w-75 h-65 bg-[#3f175f]">
          <div className="flex text-white font-semibold text-md">Logo</div>
          <div className="flex flex-row gap-2 ">
            <Image src="slack.svg" height={20} width={20} alt="logo"/>
            <Image className='bg-transparent rounded-full' src="twitter.svg" height={20} width={20} alt="logo"/>
            <Image className='bg-transparent rounded-full' src="github.svg" height={20} width={20} alt="logo"/> 
          </div>
        </div>
        {/* Box2 */}
        <div className="flex w-75 h-65 bg-[#3f175f] gap-5 flex-col pt-10 ">
          <div className="flex text-white font-semibold text-md">PAGES</div>
          <div className="flex flex-col gap-4">
            <a href="" className="flex text-white text-md">Home</a>
            <a href="" className="flex text-white text-md">Categories</a>
            <a href="" className="flex text-white text-md">Items</a>

          </div>
        </div>
        {/* Box3 */}
        <div className="flex w-75 h-65 bg-[#3f175f] gap-5 flex-col pt-10 ">
          <div className="flex text-white font-semibold text-md">LEGAL AND POLICIES</div>
          <div className="flex flex-col gap-4">
            <a href="" className="flex text-white text-md">Terms and Conditions</a>
            <a href="" className="flex text-white text-md">Privacy Policy</a>
            <a href="" className="flex text-white text-md">Cookie Policy</a>

          </div>
        </div>
        {/* Box4 */}
        <div className="flex w-75 h-65 bg-[#3f175f] gap-5 flex-col pt-10 ">
          <div className="flex text-white font-semibold text-md">PLATFORM INFORMATION</div>
          <div className="flex flex-col gap-4">
            <a href="" className="flex text-white text-md">About</a>
            <a href="" className="flex text-white text-md">How it Works</a>
            <a href="" className="flex text-white text-md">FAQs</a>
            <a href="" className="flex text-white text-md">Contact Us</a>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer