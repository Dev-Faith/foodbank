import Image from "next/image";
import { heroImg, glow, farmer, driver, ladySup, FarmerIll, paymentIll, delivery, nigeriaMap } from "./assets";
import Navbar from "./components/layout/Navbar";
import Button from "./components/ui/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import Footer from "./components/layout/Footer";
export default function Home() {
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
      title:"Seamless Farmer-Buyer Connection",
      desc: "Bridging the gap between local farmers and urban buyers with a user-friendly interface."
    },
    {
      img: paymentIll,
      title:"Flexible Payments",
      desc: "Options include online payments via Flutterwave or Remita, barter trading, or cash on delivery."
    },
    {
      img: delivery,
      title:"Trusted Logistics",
      desc: "Drivers and vehicles are verified to ensure safe and secure delivery of goods."
    },
    {
      img: nigeriaMap,
      title:"Nationwide Reach",
      desc: "Access agricultural produce from any region in Nigeria."
    },
  ]

  return (
    <div className="text-onBackground flex flex-col gap-[64px] overflow-hidden relative">
      <Navbar />
      <div className="landingPage flex flex-col gap-[64px] p-[8px]">
        <Image src={glow} alt="Glow" className="absolute right-[-5rem] top-[-2rem] z-0" />
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
        <div className="who-we-are flex flex-col gap-[32px]">
          <div className="texts flex flex-col gap-[16px]">
            <p className="text text-[24px] font-poppins">Who We Are</p>
            <p className="subTeext text-[16px] text-outline font-roboto">
              Foodbank is a platform designed to empower Nigerian farmers by
              providing visibility for their produce and connecting them with
              buyers nationwide. Our mission is to simplify agricultural trade,
              ensure secure deliveries, and offer flexible payment methods,
              making food distribution in Nigeria seamless and fair for
              everyone.
            </p>
          </div>
          <div className="images grid grid-cols-2 gap-[20px]">
            {imageLinks.map((linkImage, idx) => (
              <div
                key={idx}
                className={` relative ${
                  linkImage.label === "Buyers" && "col-span-2"
                }`}
              >
                <Image
                  src={linkImage.img}
                  key={linkImage.label}
                  alt={linkImage.label}
                />
                <MdOutlineArrowOutward className="absolute top-[10px] right-[10px] text-onPrimary" />
                <div className="texts absolute bottom-[10px] w-[140px] left-[12px] text-onPrimary">
                  <p className="label text-[14px] font-roboto">
                    {linkImage.label}
                  </p>
                  <p className="desc text-[11px] font-roboto">
                    {linkImage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="how-foodbank-works flex flex-col gap-[32px] text-[24px] font-poppins">
          <p className="heading text-[24px] text-onBackground">How Foodbank Works</p>
          <div className="lists flex flex-col gap-[16px]">
            {howItWorks.map((list, idx) => (
              <div key={idx} className="w-full flex flex-col gap-[16px]">
                <div className="top flex justify-between w-full">
                <div className="number size-[30px] rounded-full bg-surfaceContainer flex items-center justify-center text-[16px]">
                  <p>{list.id}</p>
                </div>
                <div className="texts w-[87%]">
                  <p className="title text-[16px] text-onBackground">{list.title}</p>
                  <p className="title text-[16px] text-outline font-roboto">{list.desc}</p>
                </div>
                </div>
                <div className="divider h-[1px] w-full bg-outlineVariant"></div>
              </div>
            ))}
          </div>
          <div className="callout bg-tertiary text-onPrimary rounded-[20px] p-[10px] text-[16px] font-roboto"> 
            <p>Every transaction is secured, and our logistics ensure smooth delivery.</p>
          </div>
        </div>
        <div className="what-we-offer flex flex-col gap-[32px]">
          <p className="title text-[24px] text-onBackground font-poppins">What We Offer</p>
           <div className="offers flex flex-col gap-[16px]">
           {whatWeOffer.map((offer) => <div className="flex flex-col gap-[32px] bg-surfaceContainerLow border-[1px] border-outlineVariant rounded-[20px] p-[10px]">
              <Image src={offer.img} alt={offer.title} width="119" height="152" className="self-center"/>
             <div className="texts flex flex-col gap-[8px]">
             <p className="title text-[16px] text-onBackground font-roboto">{offer.title}</p>
             <p className="desc text-[14px] text-outline font-roboto">{offer.desc}</p>
             </div>
            </div>)}
           </div>
        </div>
        <div className="ready-to-join flex flex-col gap-[32px]">
          <p className="text-onBackground text-[24px] font-poppins">Ready to Join the Foodbank Community?</p>
          <p className="desc text-outline text-[16px] font-roboto">Whether you’re a farmer, buyer, or driver, Foodbank is here to simplify your journey.</p>
          <div className="buttons grid grid-cols-2 gap-[8px] text-[14px]">
            <Button label="Start Buying Now" />
            <Button label="Join As a Farmer" variant="outline" />
            <Button label="Become a Driver" variant="text" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
