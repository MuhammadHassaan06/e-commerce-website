import React from "react";
import Image from "next/image";
import Link from 'next/link';


const AuthLayout = ({ children }) => {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-2 h-screen w-screen">
      <div className="relative">
        <Image className="hidden md:flex" src="/img1.svg" objectFit="cover" fill={true} alt="image" />
      </div>

      <div className="flex items-center justify-center  bg-white">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
