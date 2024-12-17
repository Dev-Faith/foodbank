'use client';
import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import SideMenu from "./SideMenu";
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/all";

const Navbar = () => {

  const navRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: "About Us", url: "/#" },
    { label: "Contact Us", url: "/#" },
    { label: "FAQs", url: "/faqs" },
    { label: "Privacy Policy", url: "/#" },
    { label: "Terms & Conditions", url: "/#" },
  ];

  // useEffect(()=>{
  //   if (typeof window !== undefined){
  //     gsap.to(navRef.current,
  //       {
  //         scrollTrigger: {
  //           trigger: navRef.current,
  //           start: "top top",
  //           end: "200px top",
  //           toggleActions: "play none none reverse"
  //         },
  //         // backgroundColor: "#F6FBF4",
  //         duration: 0.5,
  //         ease: "power3.inOut"
  //       }
  //     )
  //   }
  // }, [])
  return (
    <div ref={navRef} className="flex items-center justify-between text-onBackground p-[8px] fixed top-0 left-0 w-full z-50 border-[1px] border-outlineVariant bg-background">
      <div className="logo flex items-center gap-[8px]">
        <Image src={Logo} alt="Logo" width="44" height="44" />
        <p className="font-poppins text-[24px]">FOODBANK</p>
      </div>
      <SideMenu links={links} />
    </div>
  );
};

export default Navbar;
