import Image from "next/image";
import { heroImg, glow } from "./assets";
import Navbar from "./components/layout/Navbar";
import Button from "./components/ui/Button";

export default function Home() {
  return (
    <div className="text-onBackground p-[8px] flex flex-col gap-[64px] overflow-hidden">
      <Navbar />
      <div className="landingPage flex flex-col gap-[64px]">
        <div className="hero flex flex-col gap-[32px]">
          <div className="heroTexts flex flex-col gap-[16px] overflow-hidden">
          {/* <Image src={glow} alt="Glow" className="absolute right-[-3rem] top-[-2rem] z-0" /> */}
            <p className="text-[24px] font-poppins">
              Connecting Farmers, Buyers, and Drivers Across Nigeria
            </p>
            <p className="text-[16px] text-outline font-roboto">
              Revolutionizing agriculture and trade by making produce
              accessible, transportation reliable, and payments versatile.
            </p>
          </div>
          <div className="CTAs grid grid-cols-2 gap-x-[8px] gap-y-[16px] w-[323px] text-[14px] font-roboto">
            <Button label="Start Buying Now" />
            <Button label="Join As a Farmer" variant="outline" />
            <Button label="Become a Driver" variant="text" />
          </div>
          <Image src={heroImg} alt="Hero Image" className="" />
        </div>
        <div className="who-we-are">
          <div className="texts flex flex-col gap-[16px]">
          <p className="text text-[24px] font-poppins">Who We Are</p>
          <p className="subTeext text-[16px] text-outline font-roboto">Foodbank is a platform designed to empower Nigerian farmers by providing visibility for their produce and connecting them with buyers nationwide. Our mission is to simplify agricultural trade, ensure secure deliveries, and offer flexible payment methods, making food distribution in Nigeria seamless and fair for everyone.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
