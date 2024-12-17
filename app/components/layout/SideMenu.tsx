"use client";
import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

interface sideMenuProps {
  links: { label: string; url: string }[];
}


const SideMenu: React.FC<sideMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isOpen) {
     gsap.to(menuRef.current, {x:0, duration:0.5});
     gsap.to(scrimRef.current, {opacity:1, duration:0.5});
    } else {
     gsap.to(menuRef.current, {x:"108%", duration:0.5});
      gsap.to(scrimRef.current, {opacity:0, duration:0.5});
    }

    

  }, [isOpen]);
  return (
    <div className="relative w-full flex flex-col">
      <div ref={scrimRef} className="scrim fixed inset-0 bg-scrim flex items-center justify-center z-40 bg-opacity-20"></div>
      {isOpen ? (
        <IoCloseOutline
          size={33}
          className="z-50 self-end cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      ) : (
        <RiMenu3Line
          size={33}
          className="z-50 self-end cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      )}
      <div ref = {menuRef} className="menuContent absolute top-[3rem] right-[0rem] z-50 bg-background rounded-[20px] p-[24px] w-full ">
        <ul className="flex flex-col gap-[40px]">
          {links.map((link) => (
           <Link href = {link.url} key = {link.label}> <li key={link.label}>{link.label}</li></Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
