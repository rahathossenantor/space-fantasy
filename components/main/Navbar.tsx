import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 left-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-10">
      <div className="h-full flex flex-row items-center justify-center md:justify-between lg:justify-between xl:justify-between mx-5 md:mx-5 lg:mx-10 xl:mx-10">
        <a className="h-auto w-auto hidden md:flex lg:flex xl:flex flex-row items-center">
          <Image src="/NavLogo.png" alt="logo" width={45} height={45} className="cursor-pointer hover:animate-slowspin" />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">DevRahat</span>
        </a>

        <div className="h-full flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-3 py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer mx-3">About me</a>
            <a href="#skills" className="cursor-pointer mx-3">Skills</a>
            <a href="#projects" className="cursor-pointer mx-3">Projects</a>
          </div>
        </div>

        <div className="hidden md:flex lg:flex xl:flex flex-row gap-5">
          {Socials.map((social) => (
            <a key={social.name} href={social.link}><Image className="cursor-pointer" src={social.src} alt={social.name}  width={23} height={23}/></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
