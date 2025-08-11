"use client";
import React, { useState } from "react"; 
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CartIcon from "../Icons/CartIcon";
import { Menu, X } from "lucide-react"; 

const Header = () => {
  const headerLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/items",
      title: "Items",
    },
    {
      href: "/categories",
      title: "Categories",
    },
  ];
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex w-full justify-center items-center bg-[#ffffff] fixed z-10">
      <div className="flex items-center w-full px-5 py-2 bg-[#ffffff] justify-between max-w-7xl">
        <Link href="/">
          <Image src="/next.svg" height={50} width={100} alt="logo" />
        </Link>
        <div className="hidden md:flex items-center gap-5">
          {headerLinks.map((item, index) => {
            const isSelected = item.href === pathname;
            return (
              <Link
                className={`text-gray-700 ${isSelected && "underline"}`}
                href={item.href}
                key={item.title + index}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:flex items-center ">
          <div className=" flex items-center justify-center border border-[#3F175F1A] rounded-full w-[35px] h-[35px] ">
            <CartIcon />
          </div>
          <div className="flex items-center justify-center size-14 rounded-full ">
            <Image
              className="rounded-full"
              src="/dp.jpg"
              height={35}
              width={35}
              alt="logo"
            />
          </div>
        </div>
        
        <div className="md:hidden">
          {isMenuOpen ? (
            <X className="cursor-pointer" size={28} onClick={toggleMenu} />
          ) : (
            <Menu className="cursor-pointer" size={28} onClick={toggleMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;