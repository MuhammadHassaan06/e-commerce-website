"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

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
  return (
    <header className="flex w-full justify-center items-center bg-[#e6ebef]">
      <div className="flex items-center w-full px-5 py-2 bg-[#e6ebef] justify-center gap-100 max-w-7xl">
        <Link href="/">
          <Image src="/next.svg" height={50} width={100} alt="logo" />
        </Link>
        <div className="flex items-center gap-5">
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
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center size-8 border-1 border-b-black rounded-full ">
          <Image src="shopping-cart.svg" height={18} width={18} alt="logo" />
          </div>
          <div className="flex items-center justify-center size-17  rounded-full ">
          <Image className="rounded-full" src="/dp.jpg" height={35} width={35} alt="logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
