import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const links = [
    { label: "About Us", url: "/#" },
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
      label: "Phone",
      value: "+234 123 456 7890",
    },
  ];
  const iconLinks = [
    { label: "Facebook", url: "/#", icon: <LuFacebook size="33" /> },
    { label: "Twitter", url: "/#", icon: <RiTwitterXFill size="33" /> },
    { label: "Instagram", url: "/#", icon: <FaInstagram size="33" /> },
  ];

  return (
    <div className="bg-surfaceContainer pt-[24px] flex flex-col">
      <div className="mainContent flex flex-col gap-[32px] pb-[64px] border-b-[1px] border-outlineVariant">
        <ul className="links flex flex-col gap-[16px] px-[8px]">
          {links.map((link) => (
            <Link href={link.url} key={link.label}>
              <li
                key={link.label}
                className="font-roboto text-[16px] text-onSurface"
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="contacts px-[8px]">
          {contacts.map((contact) => (
            <div key={contact.label} className="flex gap-[8px]">
              <p className="font-roboto text-[16px] text-onSurface">
                {contact.label}:
              </p>
              <p className="font-roboto text-[16px] text-onSurface">
                {contact.value}
              </p>
            </div>
          ))}
        </div>
        <div className="socials px-[8px] font-roboto text-[16px] text-onSurface flex flex-col gap-[16px]">
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
    </div>
  );
};

export default Footer;