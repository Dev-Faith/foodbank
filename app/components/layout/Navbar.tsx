"use client";
import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import SideMenu from "./SideMenu";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const path = usePathname();

  const links = [
    { label: "About Us", url: "/pages/aboutUs" },
    { label: "Contact Us", url: "/#" },
    { label: "FAQs", url: "/#" },
    { label: "Privacy Policy", url: "/#" },
    { label: "Terms & Conditions", url: "/#" },
  ];

  return (
    <div
      ref={navRef}
      className="flex items-center justify-between text-onBackground p-[8px] lg:px-[64px] lg:py-[16px] fixed top-0 left-0 w-full z-50 border-b-[1px] border-outlineVariant bg-background"
    >
      <Link href="/">
        <div className="logo flex items-center gap-[8px]">
          <Image src={Logo} alt="Logo" width="44" height="44" />
          <p className="font-poppins text-[24px]">FOODBANK</p>
        </div>
      </Link>
      <SideMenu links={links} />
      <ul className="links hidden lg:flex items-center gap-[32px] text-[16px] font-roboto">
        {links.map(
          (link, idx) =>
            link.label !== "Privacy Policy" &&
            link.label !== "Terms & Conditions" && (
              <Link key={idx} href={link.url}>
                <li className={`font-roboto text-[16px] ${path==link.url && "text-primary font-bold"}`}>{link.label}</li>
              </Link>
            )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
