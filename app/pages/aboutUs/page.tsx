import React from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Image from "next/image";
import { aboutUs, firstGreen, secondGreen } from "@/app/assets";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-grow">
        <div className="welcome flex items-center gap-[64px] p-[8px] lg:px-[64px] lg:mt-[150px] mt-[120px]">
          <div className="texts flex flex-col gap-[16px]">
            <p className="font-poppins text-[32px] text-onBackground font-bold">
              Welcome to Foodbank
            </p>
            <p className="font-roboto text-outline text-[24px]">
              your trusted partner in revolutionizing food access and economic
              empowerment across Africa. At Foodbank, we are committed to
              addressing food insecurity and fostering sustainable solutions
              that empower individuals, businesses, and communities. Our
              innovative platforms seamlessly connect farmers, buyers, and
              drivers, ensuring a robust ecosystem for trade and financial
              inclusion. We take pride in being a catalyst for positive change,
              creating resilient communities through trust, innovation, and
              collaboration.
            </p>
          </div>
          <Image src={aboutUs} alt="strategy" className="rounded-[20px] w-[100vw]" />
        </div>
        <div className="ourMission relative flex flex-col">
          <Image src={firstGreen} alt="greenBg"  className="relative top-[-400px] w-screen"/>
          <div className="absolute texts text-center w-[582px] self-center top-[128px] flex flex-col gap-[24px] "> 
            <p className="font-poppins text-[32px] text-onBackground font-bold">Our Mission</p>
            <p className="font-roboto text-outline text-[24px]">
              To revolutionize access to food and essential services in Africa
              through innovation, collaboration, and sustainable practices,
              fostering economic empowerment and food security for all.
            </p>
          </div>
        </div>
        <div className="ourVision relative flex flex-col">
          <Image src={secondGreen} alt="greenBg"  className="relative top-[-700px] w-screen"/>
          <div className="absolute texts text-center w-[582px] self-center top-[-600px] flex flex-col gap-[24px]"> 
            <p className="font-poppins text-[32px] text-onBackground font-bold">Our Mission</p>
            <p className="font-roboto text-outline text-[24px]">
              To revolutionize access to food and essential services in Africa
              through innovation, collaboration, and sustainable practices,
              fostering economic empowerment and food security for all.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
