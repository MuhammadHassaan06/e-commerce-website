import React from 'react';
import Image from 'next/image';
import SlackIcon from '../Icons/SlackIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import GithubIcon from '../Icons/GithubIcon';
import { footerData } from '@/app/lib/Footer-Data';

const Footer = () => {
  return (
    <footer className="flex  w-full justify-center items-center pb-5">
      <div className="flex flex-row gap-2 items-center w-330 px-8 rounded-xl py-8 bg-[#3f175f] justify-center max-w-8xl">
        <div className="flex flex-col justify-between pt-10 pb-8 w-75 h-65 bg-[#3f175f]">
          <div className="flex text-white font-semibold text-md">
            <Image src="next.svg" height={85} width={85} alt="logo" />
          </div>
          <div className="flex flex-row gap-2 ">
            <SlackIcon />
            <TwitterIcon />
            <GithubIcon />
          </div>
        </div>

        {footerData.map((column) => (
          <div key={column.id} className="flex w-75 h-65 bg-[#3f175f] gap-5 flex-col pt-10">
            <div className="flex text-white font-semibold text-md">{column.title}</div>
            <div className="flex flex-col gap-4">
              {column.links.map((link) => (
                <a key={link.text} href={link.href} className="flex text-white text-sm">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}

      </div>
    </footer>
  );
};

export default Footer;