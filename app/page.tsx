"use client";
import Image from "next/image";
import {
  heroImg,
  glow,
  farmer,
  driver,
  ladySup,
  FarmerIll,
  paymentIll,
  delivery,
  nigeriaMap,
  grid,
} from "./assets";
import Navbar from "./components/layout/Navbar";
import Button from "./components/ui/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import Footer from "./components/layout/Footer";
import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import PdfModal from "./components/ui/pdfModal";
import { gsap } from "gsap";

export default function Home() {
  const [isPdfRead, setIsPdfRead] = useState<boolean>(false);
  const imageLinks = [
    {
      label: "Drivers",
      desc: "Earn commissions for secure deliveries.",
      img: driver,
    },
    { label: "Farmers", desc: "Get your produce seen and sold.", img: farmer },
    {
      label: "Buyers",
      desc: "Purchase fresh and quality products easily.",
      img: ladySup,
    },
  ];

  const playAudio = () => {
    const audio = new Audio("./assets/foodwave.wav");
    // clicked ? audio.pause() : audio.play();
    setClicked(!clicked);
    audio.loop = true;
    toggleAudio();
  };

  const howItWorks = [
    {
      id: 1,
      title: "Farmers Register & List Produce",
      desc: "Farmers sign up and showcase their produce with detailed descriptions, pricing, and barter options.",
    },
    {
      id: 2,
      title: "Buyers Browse & Order",
      desc: "Buyers search for fresh produce, select their preferred payment method, and place an order.",
    },
    {
      id: 3,
      title: "Drivers Deliver",
      desc: "Registered drivers pick up the goods and ensure timely delivery to buyers across Nigeria.",
    },
  ];

  const whatWeOffer = [
    {
      img: FarmerIll,
      title: "Seamless Farmer-Buyer Connection",
      desc: "Bridging the gap between local farmers and urban buyers with a user-friendly interface.",
    },
    {
      img: paymentIll,
      title: "Flexible Payments",
      desc: "Options include online payments via Flutterwave or Remita, barter trading, or cash on delivery.",
    },
    {
      img: delivery,
      title: "Trusted Logistics",
      desc: "Drivers and vehicles are verified to ensure safe and secure delivery of goods.",
    },
    {
      img: nigeriaMap,
      title: "Nationwide Reach",
      desc: "Access agricultural produce from any region in Nigeria.",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const elementRef = useRef(null);

  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      console.log(audioRef.current);
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.loop = true; // Ensure looping
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  useEffect(() => {
    const el = elementRef.current;

    // Create a yoyo animation
    gsap.to(el, {
      y: 30, // Move the element down by 30px
      duration: 2, // Duration of one cycle (up or down)
      ease: "power1.inOut", // Smooth easing for a gentle effect
      repeat: -1, // Infinite repeat
      yoyo: true, // YoYo effect (reverse animation)
      repeatDelay: 0.5, // Pause for 0.5 seconds at each end
    });
  }, []);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check localStorage for PDF read status
    const pdfRead = localStorage.getItem('pdfRead');
    setIsPdfRead(!!pdfRead);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    // Show a loading spinner or blank screen while checking localStorage
    return <div className="w-screen h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      {!isPdfRead && (
        <PdfModal
          pdfUrl="/profilePdf.pdf"
          onAccept={() => setIsPdfRead(true)}
        />
      )}
      {isPdfRead && (
        <div className="text-onBackground flex flex-col gap-[64px] overflow-hidden relative">
          {/* Audio element */}
          <audio ref={audioRef} src="/audio.mp3" preload="auto" />
          <div
            onClick={playAudio}
            ref={elementRef}
            className="play absolute z-50 lg:top-[500px] top-[350px] lg:left-[610px] left-[340px] bg-background p-[8px] size-[50px] text-[24px] flex items-center justify-center rounded-full cursor-pointer text-primary border-primary border-[1px]"
          >
            {clicked ? <FaPause /> : <FaPlay />}
          </div>
          <Navbar />
          <div className="relative landingPage flex flex-col gap-[64px] lg:gap-[128px] p-[8px] lg:px-[64px] lg:mt-[150px] mt-[120px]">
            <div className=" relative hero flex flex-col lg:grid lg:justify-items-center lg:grid-cols-2 lg:justify-between  gap-[32px]">
              {/* <Image
            src={grid}
            alt="Glow"
            className="left-0 top-0 absolute inset-0 z-0 opacity-[.23] h-full w-full object-cover"
          /> */}
              <Image
                src={grid}
                alt="Glow"
                className="lg:left-[-25rem] top-[-10rem]   lg:top-0 absolute inset-0 z-0 opacity-[.23] h-full w-full object-cover"
              />
              <div className="relative heroTexts flex flex-col gap-[16px] overflow-hidden">
                <p className="text-[24px] lg:text-[32px] font-poppins">
                  Connecting Farmers, Buyers, and Drivers Across Nigeria
                </p>
                <p className="text-[16px] text-outline font-roboto lg:font-poppins lg:text-[24px]">
                  Revolutionizing agriculture and{" "}
                  <span className="text-primary"> trade</span> by making produce
                  accessible,{" "}
                  <span className="text-primary"> transportation</span>{" "}
                  reliable, and <span className="text-primary"> payments</span>{" "}
                  versatile.
                </p>
              </div>
              <div className="CTAs grid grid-cols-2 lg:justify-self-start lg:flex lg:w-[600px] items-center justify-between gap-x-[8px] gap-y-[16px] w-[323px] text-[14px] lg:text-[18px] font-roboto">
                <Button label="Start Buying Now" />
                <Button label="Join As a Farmer" variant="outline" />
                <Button label="Become a Driver" variant="text" />
              </div>
              <Image
                src={glow}
                alt="glow"
                className="absolute size-[600px] top-[-30rem] right-[-4rem] z-0 "
              />
              <Image
                src={heroImg}
                alt="Hero Image"
                className="lg:w-[500px] col-start-2 row-start-1 row-span-2 lg:justify-self-end"
              />
              <Image
                src={glow}
                alt="glow"
                className="absolute size-[600px] bottom-[0rem] left-[-10rem] z-0  hidden lg:flex"
              />
              <Image
                src={glow}
                alt="glow"
                className="absolute size-[600px] bottom-[-30rem] left-[15rem] z-0 hidden lg:flex"
              />
            </div>
            <div className=" relative who-we-are flex flex-col gap-[32px] lg:gap-[64px]">
              <Image
                src={grid}
                alt="Glow"
                className="left-0 top-[-11rem] lg:top-[-8rem] absolute inset-0 z-0 opacity-[.23] h-full w-full object-cover"
              />
              <div className=" texts flex flex-col gap-[16px] lg:gap-[28px] lg:w-[844px] lg:self-center">
                <p className="text text-[24px] lg:text-[36px] lg:text-center font-poppins">
                  Who We Are
                </p>
                <p className=" subText text-[16px] lg:text-[24px] lg:font-poppins text-outline font-roboto lg:text-center">
                  <span className="text-primary">Foodbank</span> is a platform
                  designed to empower Nigerian farmers by providing visibility
                  for their produce and connecting them with
                  <span className="text-primary"> Buyers</span> nationwide. Our
                  mission is to simplify agricultural trade, ensure secure{" "}
                  <span className="text-primary">deliveries</span>, and offer
                  flexible payment methods, making{" "}
                  <span className="text-primary">food</span> and even{" "}
                  <span className="text-primary">drug</span> distribution in
                  Nigeria seamless and fair for everyone.
                </p>
              </div>
              <div className="images grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {imageLinks.map((linkImage, idx) => (
                  <div
                    key={idx}
                    className={` relative ${
                      linkImage.label === "Buyers" &&
                      "col-span-2 lg:rounded-[50px] lg:col-span-1"
                    }`}
                  >
                    <Image
                      src={linkImage.img}
                      key={linkImage.label}
                      alt={linkImage.label}
                    />
                    <MdOutlineArrowOutward className="absolute top-[10px] right-[10px] lg:size-[33px] lg:top-[20px] lg:right-[15px]  text-onPrimary" />
                    <div className="texts absolute bottom-[10px] lg:bottom-[20px] w-[140px] lg:w-[300px] left-[12px] lg:left-[24px] text-onPrimary">
                      <p className="label text-[14px] lg:text-[28px] font-roboto">
                        {linkImage.label}
                      </p>
                      <p className="desc text-[11px] lg:text-[16px] font-roboto">
                        {linkImage.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="how-foodbank-works relative flex flex-col gap-[32px] lg:gap-[64px] text-[24px] font-poppins items-center">
              <Image
                src={grid}
                alt="Glow"
                className="left-0 top-0 absolute inset-0 z-0 opacity-[.23] h-full w-full object-cover"
              />
              <p className="heading text-[24px] text-onBackground lg:text-[36px] lg:text-center">
                How Foodbank Works
              </p>
              <div className="lists flex flex-col gap-[16px] lg:w-[741px]">
                {howItWorks.map((list, idx) => (
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
                          {list.desc}
                        </p>
                      </div>
                    </div>
                    {/* <div className="divider h-[1px] w-full bg-outlineVariant"></div> */}
                  </div>
                ))}
              </div>
              <div className="callout bg-tertiary text-onPrimary rounded-[20px] p-[10px] text-[16px] lg:text-[24px] lg:text-center font-roboto lg:w-[741px] ">
                <p>
                  Every transaction is secured, and our logistics ensure smooth
                  delivery.
                </p>
              </div>
            </div>
            <div className="what-we-offer flex flex-col gap-[32px] lg:gap-[64px]">
              <p className="title text-[24px] lg:text-[36px] lg:text-center text-onBackground font-poppins">
                What We Offer
              </p>
              <div className="offers flex flex-col gap-[16px] lg:grid lg:grid-cols-2">
                {whatWeOffer.map((offer, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col lg:px-[16px] lg:py-[10px] gap-[32px] bg-surfaceContainerLow border-[1px] border-outlineVariant rounded-[20px] p-[10px] lg:h-[360px] lg:gap-0 lg:justify-between"
                  >
                    <Image
                      src={offer.img}
                      alt={offer.title}
                      width="119"
                      height="152"
                      className="self-center lg:w-[200px] lg:h-[144px] object-fill"
                    />
                    <div className="texts flex flex-col gap-[8px]">
                      <p className="title text-[16px] text-onBackground font-roboto lg:text-[28px]">
                        {offer.title}
                      </p>
                      <p className="desc text-[14px] text-outline font-roboto lg:text-[24px]">
                        {offer.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ready-to-join flex flex-col gap-[32px] lg:items-center relative">
              <Image
                src={grid}
                alt="Glow"
                className="left-0 top-0 absolute inset-0 z-0 opacity-[.23] h-full w-full object-cover"
              />
              <p className="text-onBackground text-[24px] font-poppins lg:text-center lg:text-[36px] lg:w-[578px]">
                Ready to Join the Foodbank Community?
              </p>
              <p className="desc text-outline text-[16px] font-roboto lg:text-[24px] lg:w-[578px] lg:text-center">
                Whether you’re a farmer, buyer, or driver, Foodbank is here to
                simplify your journey.
              </p>
              <div className="buttons grid grid-cols-2 lg:grid-cols-3 lg:items-center gap-[8px] text-[14px]">
                <Button label="Start Buying Now" />
                <Button label="Join As a Farmer" variant="outline" />
                <Button label="Become a Driver" variant="text" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
