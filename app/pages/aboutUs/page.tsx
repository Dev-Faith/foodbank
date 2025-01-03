import React from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Image from "next/image";
import { aboutUs, firstGreen, secondGreen, grid } from "@/app/assets";
import Button from "@/app/components/ui/Button";

const Page = () => {
  const whyChooseUs = [
    {
      id: 1,
      title: "Innovative Solutions",
      texts:
        "Cutting-edge technology drives our platforms, simplifying food distribution, trade, and financial services.",
    },
    {
      id: 2,
      title: "Accessibility",
      texts:
        " Our services span Nigeria's 36 states and the FCT, ensuring nationwide impact.",
    },
    {
      id: 3,
      title: "Economic Empowerment",
      texts:
        "Through microfinancing, barter systems, and savings programs, we enable communities to thrive.",
    },
    {
      id: 4,
      title: "Transparency & Reliability",
      texts:
        "Our operations prioritize trust and accountability in every transaction.",
    },
    {
      id: 5,
      title: "Comprehensive Services",
      texts:
        "From food stock exchange to flexible loans, we provide a holistic approach to economic growth.",
    },
  ];

  const ourCoreFeatures = [
    {
      id: 1,
      title: "Online Stock Exchange",
      texts:
        "Trade food and agricultural products with ease through our secure online platform.",
    },
    {
      id: 2,
      title: "Barter & Trade Facilitation",
      texts:
        " Exchange goods without monetary transactions, fostering accessible trade opportunities.",
    },
    {
      id: 3,
      title: "Savings & Credit Points",
      texts:
        "Earn and redeem points for products and services, promoting financial sustainability.",
    },
    {
      id: 4,
      title: "Loan Options",
      texts:
        "Access flexible loan plans tailored to empower farmers, vendors, and communities.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex-grow">
        <div className="welcome flex items-center gap-[64px] p-[8px] lg:px-[64px] lg:mt-[150px] mt-[120px]">
          <div className="texts flex flex-col gap-[16px]">
            <p className="font-poppins text-[32px] text-onBackground">
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
          <Image src={aboutUs} alt="strategy" className="rounded-[20px]" />
        </div>
        <div className="ourMission relative flex flex-col">
          <Image
            src={firstGreen}
            alt="greenBg"
            className="relative top-[-200px] w-screen"
          />
          <div className="absolute texts text-center w-[582px] self-center top-[128px] flex flex-col gap-[24px] ">
            <p className="font-poppins text-[32px]">Our Mission</p>
            <p className="font-roboto text-outline text-[24px]">
              To revolutionize access to food and essential services in Africa
              through innovation, collaboration, and sustainable practices,
              fostering economic empowerment and food security for all.
            </p>
          </div>
        </div>
        <div className="ourVision relative flex flex-col top-[-300px]">
          <Image
            src={secondGreen}
            alt="greenBg"
            className="relative top-[-200px] w-screen"
          />
          <div className="absolute texts text-center w-[582px] self-center top-[-128px] flex flex-col gap-[24px] ">
            <p className="font-poppins text-[32px]">Our Mission</p>
            <p className="font-roboto text-outline text-[24px]">
              To revolutionize access to food and essential services in Africa
              through innovation, collaboration, and sustainable practices,
              fostering economic empowerment and food security for all.
            </p>
          </div>
        </div>
        <div className="why-choose-us top-[-500px]  relative flex flex-col gap-[32px] lg:gap-[64px] text-[24px] font-poppins items-center">
          <Image
            src={grid}
            alt="Glow"
            className="left-0 top-0 absolute inset-0 z-0 opacity-[.23] h-full w-full object-cover"
          />
          <p className="heading text-[24px] text-onBackground lg:text-[36px] lg:text-center">
            Why Choose Us?
          </p>
          <div className="lists flex flex-col gap-[16px] lg:w-[741px]">
            {whyChooseUs.map((list, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col gap-[16px] border-b-[1px] p-[16px] border-outlineVariant"
              >
                <div className="top flex justify-between w-full">
                  <div className="number size-[30px] lg:size-[40px]  rounded-full bg-surfaceContainer flex items-center justify-center text-[16px] lg:text-[28px]">
                    <p>{list.id}</p>
                  </div>
                  <div className="texts w-[87%] flex flex-col gap-[16px]">
                    <p className="title text-[16px] lg:text-[28px] text-onBackground">
                      {list.title}
                    </p>
                    <p className="title text-[16px] lg:text-[24px] text-outline font-roboto">
                      {list.texts}
                    </p>
                  </div>
                </div>
                {/* <div className="divider h-[1px] w-full bg-outlineVariant"></div> */}
              </div>
            ))}
          </div>
        </div>
        <div className="Our-Core-Features top-[-250px]  relative flex flex-col gap-[32px] lg:gap-[64px] text-[24px] font-poppins items-center">
          <Image
            src={grid}
            alt="Glow"
            className="left-0 top-0 absolute inset-0 z-0 opacity-[.23] h-full w-full object-cover"
          />
          <p className="heading text-[24px] text-onBackground lg:text-[36px] lg:text-center">
            Our Core Features
          </p>
          <div className="lists flex flex-col gap-[16px] lg:w-[741px]">
            {ourCoreFeatures.map((list, idx) => (
              <div
                key={idx}
                className="w-full flex flex-col gap-[16px] border-b-[1px] p-[16px] border-outlineVariant"
              >
                <div className="top flex justify-between w-full">
                  <div className="number size-[30px] lg:size-[40px]  rounded-full bg-surfaceContainer flex items-center justify-center text-[16px] lg:text-[28px]">
                    <p>{list.id}</p>
                  </div>
                  <div className="texts w-[87%] flex flex-col gap-[16px]">
                    <p className="title text-[16px] lg:text-[28px] text-onBackground">
                      {list.title}
                    </p>
                    <p className="title text-[16px] lg:text-[24px] text-outline font-roboto">
                      {list.texts}
                    </p>
                  </div>
                </div>
                {/* <div className="divider h-[1px] w-full bg-outlineVariant"></div> */}
              </div>
            ))}
          </div>
          <div className="callToAction w-[576px] text-center flex flex-col gap-[64px] mt-[128px]">
            <p className="font-poppins text-onBackground text-[36px]">
              Join the Movement
            </p>
            <p className="font-roboto text-outline text-[24px]">
              Foodbank is more than just a platform — it’s a movement reshaping
              how food, finance, and trade converge in Africa. Whether you’re a
              farmer, a buyer, or a driver, there’s a place for you in our
              community. Together, we can build a future defined by
              accountability, resilience, and inclusivity.
            </p>
            <Button
              label="Become a part of Foodbank today, and let's create a world where no one goes hungry."
              variant="text"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;