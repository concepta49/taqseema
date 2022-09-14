import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { Drawer } from "antd";
import { Dropdown, Menu, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlineSolution,
  AiOutlineTransaction,
  AiOutlineStock,
  AiOutlineNotification,
  AiTwotoneCar,
} from "react-icons/ai";
import CountUp from "react-countup";

import ScrollTrigger from "react-scroll-trigger";
import SimpleImageSlider from "react-simple-image-slider";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const images = [
  { url: "/images/bb.jpg" },
  { url: "/images/b.jpg" },
  { url: "images/kk.jpg" },
  { url: "images/uu.jpg" },
  { url: "images/y.jpg" },
];

function Homepage() {
  const [counterOn, setCounterOn] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleToggle = () => setIsNavExpanded(!isNavExpanded);

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          type: "group",
          label: "Group title",
          children: [
            {
              key: "1-1",
              label: "1st menu item",
            },
            {
              key: "1-2",
              label: "2nd menu item",
            },
          ],
        },
      ]}
    />
  );

  return (
    <div>
      <section className="bg-[#18181b] lg:mx-auto opacity-3">
        <header className="relative max-w-[1740px] px-3 py-4 lg:p-2  lg:mx-auto flex justify-between items-center">
          <ul className="hidden lg:flex  text-center">
            <li className="mx-4 my-6 md:my-0 pl-24">
              <Link href="/">
                <a
                  href="#"
                  className="text-xl hover:text-[#c026d3] duration-500 text-white"
                >
                  HOME
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="/">
                <a
                  href="#"
                  className="text-xl hover:text-[#c026d3] duration-500 text-white"
                >
                  ABOUT US
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="/">
                <a
                  href="#"
                  className="text-xl hover:text-[#c026d3] duration-500 text-white"
                >
                  FEATURES{" "}
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="/">
                <a
                  href="#"
                  className="text-xl hover:text-[#c026d3] duration-500 text-white"
                >
                  PLANS
                </a>
              </Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link href="/">
                <a
                  href="#"
                  className="text-xl hover:text-[#c026d3] duration-500 text-white"
                >
                  FAQ
                </a>
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex mp-4 mr-20">
          <a
              className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
              href="#"
            >
              <button className="mt-2 mb-2 mr-4 py-[6px] px-[30px] bg-[#c026d3] border-[#c026d3] border-2 rounded-lg ">
                SIGN IN
              </button>
            </a>
            <a
              className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
              href="#"
            >
              <button className="mt-2 mb-2 mr-4 py-[6px] px-[30px] bg-[#c026d3] border-[#c026d3] border-2 rounded-lg ">
                SIGN UP
              </button>
            </a>
          </div>

          <AiOutlineMenuFold
            size={30}
            color="white"
            onClick={handleToggle}
            className="lg:hidden"
          />
          <Drawer
            width="100%"
            visible={isNavExpanded}
            placement="right"
            onClose={handleToggle}
            extra={
              <Image
                className=""
                src="/images/logo.png"
                alt="Pic"
                width={120}
                height={50}
              />
            }
          >
            <div className="grid text-xl place-items-center ">
              <ul className="mt-4 lg:hidden font-bold text-gray-600">
                <ul className=" lg:flex justify-center ">
                  <li className="mx-4 my-6 md:my-0">
                    <Link href="/">
                      <a
                        href="#"
                        className="text-xl hover:text-[#3735b6] duration-500 text-[#9CA3AF]"
                      >
                        HOME
                      </a>
                    </Link>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <Link href="/">
                      <a
                        href="#"
                        className="text-xl hover:text-[#3735b6] duration-500 text-[#9CA3AF]"
                      >
                        ABOUT
                      </a>
                    </Link>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <Link href="/">
                      <a
                        href="#"
                        className="text-xl hover:text-[#3735b6] duration-500 text-white"
                      >
                        HOW TO USE{" "}
                      </a>
                    </Link>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <Link href="/">
                      <a
                        href="#"
                        className="text-xl hover:text-[#3735b6] duration-500 text-white"
                      >
                        FAQ
                      </a>
                    </Link>
                  </li>
                  <li className="mx-4 my-6 md:my-0">
                    <Link href="/">
                      <a
                        href="#"
                        className="text-xl hover:text-[#3735b6] duration-500 text-[#f8f9fa]"
                      >
                        CONTACT
                      </a>
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </Drawer>
        </header>

        <section className="relative flex w-full bg-gradient-to-r from-[#5c064c] to-[#e81eca10] ">
          <div className="w-full relative h-[750px] lg:h-[650px] md:h-[540px] lg:text-center  text-left   ">
            <video
              autoPlay
              loop
              muted
              className="absolute max-w-none  w-full object-cover  z-0  h-[650px] lg:h-[650px] md:h-[540px] lg:text-center   "
            >
              <source
                src="/videos/5 background video effects for Games Sports_Trim.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute top-0 w-full bg-gradient-to-r from-[#5c064c] to-[#e81eca10]  h-[750px] lg:h-[650px] md:h-[540px]">
              <div className="container mx-auto sm:px-28 ">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-1/2  py-12 ">
                    <div className="mr-8 mb-4 text-white">
                      <h4 className="text-5xl md:text-5xl lg:text-8xl font-bold text-white text-left">
                        PLAYING MADE EASY
                      </h4>
                      <p className="text-3xl mt-4 text-left">
                        Taqseema, the easy to use Sports App coming soon to
                        Qatar
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex ">
                      <button className="text-black p-4 text-sm font-bold bg-white rounded-xl mt-6 text-left mr-4">
                        Start for free
                      </button>
                      <button className=""></button>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:pr-5 py-5 hidden lg:flex mt-12">

                  <Image
                className="ml-auto my-auto opacity-3"
                src="/images/Untitled-design-86.png"
                alt="Pic"
                width={500}
                height={600}
              />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-[#F3F4F6] rounded-2xl p-5">
        <div className="container mx-auto sm:px-28 py-20 ">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2  py-5">
              <div className="">
                <h2 className="lg:text-5 xl text-3xl md:text-5xl font-semibold text-[#86198f]">
                  Single App for All Sports lovers
                </h2>
                <p className="mt-8 text-black font-semibold text-lg text-left">
                  The easiest tool online for all to bring friends together to
                  have a good game, let it be Futsal, Football or Dota, the
                  basic needs to have a game is all centrally manageable in just
                  a few clicks.
                </p>
                <p className="mt-8 font-semibold text-black text-lg">
                  {" "}
                  Discover Venues , Events, Deals, Friends and Tip
                </p>
                <p className="mt-8 font-semibold text-black text-lg">
                  Make New friends and network
                </p>
                <p className="mt-8 font-semibold text-black text-lg">
                  Buy all your sports needs with the best deals
                </p>
              </div>
              <div className="mt-10 flex">
                <div className="">
                  <a
                    className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                    href="#"
                  >
                    <button className="animate-bounce  mt-4  mb-12 mr-4 py-[4px] px-[30px] bg-[#7e22ce] border-[#7e22ce] border-2 rounded-lg text-lg">
                      LEARN MORE
                    </button>
                  </a>{" "}
                </div>
                <div className="ml-16 mt-4"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-5 gap-[26px]   ">
              <img
                className="rounded shadow-md ml-auto my-auto"
                src="/images/Untitled-design-5.gif"
                alt=""
              />
            </div>
          </div>
        </div>

        <section className="bg-[#F3F4F6] font-Poppins py-20 pb-28 pt-16">
          <div className="max-w-[1240px] w-full mx-auto ">
            <div className="mt-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] ">
              <div className="flex flex-col items-left  bg-gradient-to-r from-[#d127b1] to-[#7e1b7010] cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="text-center">
                  <div className=" ">
                    {" "}
                    <AiOutlineNotification size="36px" color="white" />
                  </div>

                  <h1 className="text-[#531b49] text-xl font-bold mt-4">
                    Increase sales and outreach
                  </h1>
                </div>
              </div>
              <div className="flex flex-col items-center  bg-gradient-to-r from-[#d127b1] to-[#7e1b7010] cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="text-center">
                  <div>
                    {" "}
                    <AiOutlineTransaction size="36px" color="white" />
                  </div>

                  <h1 className="text-[#531b49] text-xl font-bold mt-4">
                    Enable reservations and online bookings
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-center bg-gradient-to-r from-[#d127b1] to-[#7e1b7010] cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="text-center">
                  <div>
                    {" "}
                    <AiTwotoneCar size="36px" color="white" />
                  </div>

                  <h1 className="text-[#531b49] text-xl font-bold mt-4">
                    Tracking & progress
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-center bg-gradient-to-r from-[#d127b1] to-[#7e1b7010] cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="text-center">
                  <div>
                    {" "}
                    <AiTwotoneCar size="36px" color="white" />
                  </div>

                  <h1 className="text-[#531b49] text-xl font-bold mt-4">
                    Financial and transaction reports
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-center  bg-gradient-to-r from-[#d127b1] to-[#7e1b7010] cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="text-center">
                  <div>
                    {" "}
                    <AiOutlineSolution className="justify-center" size="36px" color="white" />
                  </div>

                  <h1 className="text-[#531b49] text-xl font-bold mt-4">
                    Flexible pricing, cancellation & rescheduling policies
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-center bg-gradient-to-r from-[#d127b1] to-[#7e1b7010] md:items-start  w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out ">
                <div className="text-center">
                  <div>
                    <AiOutlineStock size="36px" color="white" />
                  </div>
                  <h1 className="text-[#531b49] text-xl font-bold mt-4">
                    Real time alerts and notifications
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F3F4F6] font-Poppins  pb-8 pt-8">
          <div className="contents">
    <div className="photos">
      <div className="thumbnails">
      <Image
                className="ml-auto my-auto opacity-3"
                src="/images/Untitled-design-card3.jpg"
                alt="Pic"
                width={300}
                height={300}
              />        <div className="black"></div>
        <div className="title font-bold lg:text-4xl">FIND GAMES</div>
      </div>

      <div className="thumbnails">
      <Image
                className="ml-auto my-auto opacity-3"
                src="/images/Untitled-design-card2.jpg"
                alt="Pic"
                width={300}
                height={300}
              />          <div className="black"></div>
        <div className="title font-bold lg:text-4xl">FIND PLAYERS</div>
      </div>

      <div className="thumbnails">
      <Image
                className="ml-auto my-auto opacity-3"
                src="/images/Untitled-designcard.jpg"
                alt="Pic"
                width={300}
                height={300}
              />          <div className="black"></div>
        <div className="title font-bold lg:text-4xl">FIND GROUNDS</div>
      </div>
    </div>
</div>

          </section>
       
        
        <section className="bg-[#F3F4F6] rounded-2xl pb-12  ">
          <div className="container mx-auto sm:px-28 mt-12">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 lg:pr-5 py-5 flex ">
                <a
                  className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                  href="#"
                >
                  <button className="mt-12 mb-18 ml-16 py-[4px] px-[30px] bg-[#7e22ce] border-[#7e22ce] border-2 rounded-lg text-lg">
                    BOOKING TODAY
                  </button>
                </a>{" "}
              </div>
              <div className="w-full lg:w-1/2  py-5">
                <div className="">
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#86198f]">
                    BOOKING WITH US
                  </h2>
                  <p className="mt-8 text-black font-semibold text-lg text-left">
                    We empower businesses targeting sports and fitness consumers
                    and help them engage with our community to increase
                    outreach. Additionally, our technology solutions also help
                    providers manage their operations efficiently and integrate
                    seamlessly with online booking and sales channels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16">
          <div className="w-full">
            {/* <h1 className="text-5xl font-bold text-center text-[#86198f] mb-4">
              BEST GROUNDS
            </h1> */}
            <SimpleImageSlider
              className="w-full  item-center "
              width={1330}
              height={400}
              images={images}
              showBullets={true}
     
            />
             
          </div>
        </section>
        </section>
      </section>
      <section className="bg-[#F3F4F6] py-14 ">
        <div className="max-w-[1740px] w-full mx-auto px-3">
          {/* <h3 className="text-[#86198f] font-bold lg:text-[36px] text-xl text-center ">
            OUR PRODUCTS
          </h3> */}

          <div className="mt-8 items:left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px]">
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/b.jpg" alt="l" width={500} height={500} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg font-bold">
                Clothing & Accesories
              </h1>

              <h1 className="font-bold text-[#86198f] lg:text-[24px] text-lg text-center">
                Leather bag
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <a
                className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                href="#"
              >
                <button className="mt-12 mb-12 mr-4 py-[4px] px-[30px] bg-[#7e22ce] border-[#7e22ce] border-2 rounded-lg text-lg">
                  SEE MORE
                </button>
              </a>
            </div>

            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/kk.jpg" alt="l" width={500} height={500} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg font-bold">
                Clothing & Accesories
              </h1>
              <h1 className="font-bold text-[#86198f] lg:text-[24px] text-lg text-center ">
                Adidas cap
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] mt-2 ">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <a
                className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                href="#"
              >
                <button className="mt-12 mb-12 mr-4 py-[4px] px-[30px] bg-[#7e22ce] border-[#7e22ce] border-2 rounded-lg text-lg">
                  SEE MORE
                </button>
              </a>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/bb.jpg" alt="l" width={500} height={500} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg font-bold">
                Clothing & Accesories
              </h1>

              <h1 className="font-bold text-[#86198f] lg:text-[24px] text-lg text-center">
                Leather bag
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <a
                className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                href="#"
              >
                <button className="mt-12 mb-12 mr-4 py-[4px] px-[30px] bg-[#7e22ce] border-[#7e22ce] border-2 rounded-lg text-lg">
                  SEE MORE
                </button>
              </a>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/cc.jpg" alt="l" width={500} height={500} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm lg:text-lg font-bold">
                Clothing & Accesories
              </h1>
              <h1 className="font-bold text-[#86198f] lg:text-[24px] text-lg text-center">
                Velvet slippers
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <a
                className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                href="#"
              >
                <button className="mt-12 mb-12 mr-4 py-[4px] px-[30px] bg-[#7e22ce] border-[#7e22ce] border-2 rounded-lg text-lg">
                  SEE MORE
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-2">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        />
        <div className=" py-5 w-full bg-black  text-white">
          <div className="grid grid-cols-5 gap-4 justify-items-center l">
            <div className="text-3xl ">
              {" "}
              {counterOn && (
                <CountUp start={0} end={6000} duration={2} delay={0} />
              )}
              +<h1 className="text-3xl font-bold mt-4 text-[]">PRODUCTS</h1>
            </div>

            <div className="text-3xl">
              {" "}
              {counterOn && (
                <CountUp start={0} end={4000} duration={2} delay={0} />
              )}
              +<h1 className="text-3xl font-bold mt-4 text-[]">BOOKINGS</h1>
            </div>

            <div className="text-3xl">
              {" "}
              {counterOn && (
                <CountUp start={0} end={8000} duration={2} delay={0} />
              )}
              +<h1 className="text-3xl font-bold mt-4 text-[]">GAMES</h1>
            </div>

            <div className="text-3xl pl-4">
              {" "}
              {counterOn && (
                <CountUp start={0} end={5000} duration={2} delay={0} />
              )}
              +<h1 className="text-3xl font-bold mt-4 text-[]">VENUS</h1>
            </div>
            <div className="text-3xl pl-4">
              {" "}
              {counterOn && (
                <CountUp start={0} end={8000} duration={2} delay={0} />
              )}
              +<h1 className="text-3xl font-bold mt-4 text-[]">PLAYERS</h1>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-white mt-2  bg-gradient-to-r from-[#5c064c] to-[#60145510]">
        <div className="flex flex-wrap py-12">
          <div className="p-5  w-full md:w-1/4">
            <h2 className="font-extrabold text-2xl ">SUPPORT</h2>
            <p className="text-white mt-3 font-bold">
              PRODUCT HELP
              <br />
            
              COMMUNITY
            </p>
          </div>
          <div className="p-5  w-full md:w-1/4">
            <h2 className="font-extrabold text-xl">COMPANY</h2>
            <p className="text-white mt-3 font-bold">
              ABOUT US
              <br />
             
              INVESTOR RELATION
            </p>
          </div>
          <div className="p-5  w-full md:w-1/4">
            <p className="text-white  font-bold">
              <a href="tel:+91000000000">000-000-000</a>
              <br />
              <a href="mailto:contact@gmail.com">contact@gmail.com</a>
            </p>
            <ul className="flex mt-4">
              <li className="p-2 bg-white shadow rounded  mx-1">
                <a className="text-gray-500" href="">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </li>
              <li className="p-2 bg-white shadow rounded  mx-1">
                <a className="text-gray-500" href="">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </a>
              </li>

              <li className="p-2 bg-white shadow rounded  mx-1">
                <a className="text-gray-500" href="">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
              <li className="p-2 bg-white shadow rounded mx-1">
                <a className="text-gray-500 " href="">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="p-5  w-full md:w-1/4">
            <ul className="flex ">
              <a
                className="text-white text-xl font-[Poppins] cursor-pointer  duration-500"
                href="#"
              >
                <button className=" py-[6px] px-[30px] bg-[#c026d3] border-[#c026d3] border-2 rounded-lg ">
                  DOWNLOAD APP
                </button>
              </a>
            </ul>
            <div className="mt-4 flex gap-4">
              <Image src="/images/ios.png" alt="l" width={300} height={100} />
              <Image
                src="/images/android.png"
                alt="l"
                width={300}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="text-center text-white font-bold ">All Rights Reserved</div>
      </footer>
    </div>
  );
}

export default Homepage;
