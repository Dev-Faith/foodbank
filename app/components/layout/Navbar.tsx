import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import Logo from "../../../public/logo.png";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-onBackground'>
       <div className="logo flex items-center gap-[8px]">
       <Image src={Logo} alt="Logo" width="44" height="44"/>
       <p className='font-poppins text-[24px]'>FOODBANK</p>
       </div>
        <RiMenu3Line size={33} />
    </div>
  )
}

export default Navbar;