import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import SideMenu from "./SideMenu";

const Navbar = () => {

  const links = [
    { label: "About Us", url: "/#" },
    { label: "Contact Us", url: "/#" },
    { label: "FAQs", url: "/faqs" },
    { label: "Privacy Policy", url: "/#" },
    { label: "Terms & Conditions", url: "/#" },
  ];
  return (
    <div className="flex items-center justify-between text-onBackground p-[8px]">
      <div className="logo flex items-center gap-[8px]">
        <Image src={Logo} alt="Logo" width="44" height="44" />
        <p className="font-poppins text-[24px]">FOODBANK</p>
      </div>
      <SideMenu links={links} />
    </div>
  );
};

export default Navbar;
