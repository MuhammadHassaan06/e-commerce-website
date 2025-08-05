import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="relative">
        <Image src="/img1.svg" objectFit="cover" fill={true} alt="image" />
      </div>

      <div className="flex items-center justify-center  bg-white">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
