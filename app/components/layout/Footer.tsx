import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { glow } from "@/app/assets";
import Image from "next/image";

const Footer = () => {
  const links = [
    { label: "About Us", url: "/pages/aboutUs" },
    { label: "Contact Us", url: "/#" },
    { label: "FAQs", url: "/faqs" },
    { label: "Privacy Policy", url: "/#" },
    { label: "Terms & Conditions", url: "/#" },
  ];

  const contacts = [
    {
      label: "Email",
      value: "support@foodbank.com",
    },
    {
      label: "Phone 1",
      value: "+234 9074779624",
    },
    {
      label: "Phone 2",
      value: "+234 7065470056",
    },
    {
      label: "Office Address",
      value: " Suite D7 Othni Plaza Nouakchott Street Wuse I, Abuja",
    },
  ];
  const iconLinks = [
    { label: "Facebook", url: "https://www.facebook.com/share/WAwEoQqdyP9Mcbos/", icon: <LuFacebook size="33" /> },
    { label: "Twitter", url: "https://x.com/BobkaB25672?t=UyupXBe1SuLCuLsIyvCRGQ&s=09", icon: <RiTwitterXFill size="33" /> },
    { label: "Youtube", url: "https://youtube.com/@foodbanknigeria?si=6J4RjA995gQr7ZMx", icon: <FiYoutube size="33" /> },
    { label: "Telegram", url: "https://t.me/Bobkazfood", icon: <LiaTelegram size="33" /> },
  ];

  return (
    <footer className="bg-surfaceContainer pt-[24px] flex flex-col relative lg:items-center lg:justify-center">
      <div className="mainContent flex flex-col gap-[32px] lg:gap-[64px] pb-[64px] border-b-[1px] border-outlineVariant lg:items-center lg:w-full lg:py-[128px]">
        <ul className="links flex flex-col lg:flex-row lg:text-center gap-[16px] px-[8px]">
          {links.map((link) => (
            <Link href={link.url} key={link.label}>
              <li
                key={link.label}
                className="font-roboto text-[16px] text-onSurface lg:text-primary lg:underline lg:text-[24px]"
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="contacts px-[8px] gap-[32px] lg:grid grid-cols-2 lg:justify-center lg:gap-[24px]">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex gap-[8px]">
              <p className="font-roboto text-[16px] text-onSurface">
                {contact.label}:
              </p>
              <p className="font-roboto text-[16px] text-outline">
                {contact.value}
              </p>
            </div>
          ))}
        </div>
        <div className="socials px-[8px] font-roboto text-[16px] text-onSurface flex flex-col gap-[16px] lg:text-center lg:items-center">
          <p>
            Follow us on Facebook, Instagram, and Twitter for the latest
            updates.
          </p>
          <ul className="iconLinks flex items-center gap-[24px]">
            {iconLinks.map((iconLink) => (
              <Link href={iconLink.url} key={iconLink.label}>
                <li className="text-onSurface">{iconLink.icon}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="remarks flex items-center justify-center">
        <p className="text-[12px] text-onSurface font-roboto p-[10px]">
          © 2024 Foodbank. All rights reserved.
        </p>
      </div>
      <Image src={glow} alt="glow" className="absolute size-[500px] top-[-5rem] lg:top-[10rem] right-[-4rem]" />
      <Image src={glow} alt="glow" className="absolute size-[500px] top-[-5rem] lg:top-[10rem] right-[-4rem]  hidden lg:flex" />
    </footer>
  );
};

export default Footer;
