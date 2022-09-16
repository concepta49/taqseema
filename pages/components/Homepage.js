import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {  Menu } from "antd";

import { IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";
import { Drawer } from "antd";
import { Dropdown, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMediumLine,
  RiWhatsappLine,
  RiYoutubeLine,
} from "react-icons/ri";
import {
  AiFillStar,
  AiOutlineFileDone,
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
  const handleToggle = () => setIsNavExpanded(isNavExpanded);

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
        <header className="relative max-w-[1640px] px-3 py-4 lg:p-2  lg:mx-auto flex justify-between items-center">
          <ul className="hidden lg:flex  text-center text-bold">
            <li className="mx-4 my-6 md:my-0 pl-36">
              <Link href="/">
                <a
                  href="#"
                  className="text-xl hover:text-[#c026d3] text-bold duration-500 text-white"
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

          <div className="hidden lg:flex  pl-24" id="mobileMenu">
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

          
          <Drawer
            width="100%"
            visible={isNavExpanded}
            placement="left"
            onClose={handleToggle}
            onClick={handleToggle}
          >

          <div className="grid text-xl place-items-center ">
            <ul className="mt-4 lg:hidden font-bold text-white">
              <ul className=" lg:flex justify-center ">
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
                <li className="mx-4 my-6 md:my-0 pl-24">
                  <Link href="/">
                    <a
                      href="#"
                      className="text-xl hover:text-[#c026d3] duration-500 text-white"
                    >
                      ABOUT US
                    </a>
                  </Link>
                </li>
                <li className="mx-4 my-6 md:my-0 pl-24">
                  <Link href="/">
                    <a
                      href="#"
                      className="text-xl hover:text-[#c026d3] duration-500 text-white"
                    >
                      FEATURES
                    </a>
                  </Link>
                </li>
                <li className="mx-4 my-6 md:my-0 pl-24">
                  <Link href="/">
                    <a
                      href="#"
                      className="text-xl hover:text-[#c026d3] duration-500 text-white"
                    >
                      PLANS
                    </a>
                  </Link>
                </li>
                <li className="mx-4 my-6 md:my-0 pl-24">
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
            </ul>
          </div>
          </Drawer>
        </header>
      </section>





      <section className="relative flex w-full bg-gradient-to-r from-[#5c064c] to-[#e81eca10] ">
        <div className="w-full relative h-[850px] lg:h-[650px] md:h-[540px] lg:text-center  text-left   ">
          <video
            autoPlay
            loop
            muted
            className="absolute max-w-none  w-full object-cover  z-0  h-[850px] lg:h-[650px] md:h-[540px] lg:text-center   "
          >
            <source
              src="/videos/5 background video effects for Games Sports_Trim.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute top-0 w-full bg-gradient-to-r from-[#5c064c] to-[#e81eca10]  h-[850px] lg:h-[650px] md:h-[540px] ">
            <div className="container mx-auto sm:px-28 ">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2  py-12 ">
                  <div className="lg:mr-8 lg:mb-4 text-white">
                    <h4 className="text-7xl md:text-5xl lg:text-8xl font-bold text-white lg:text-left text-center lg:mt-0 mt-12 ">
                      PLAYING MADE EASY
                    </h4>
                    <p className="text-3xl lg:mt-4 lg:text-left text-center  mt-12">
                      Taqseema, the easy to use Sports App coming soon to Qatar
                    </p>
                  </div>
                  <div className="lg:flex hidden w-full lg:w-1/2  lg:mt-0 mt-12">
                    <button className="text-black p-4 text-sm font-bold bg-white rounded-xl mt-6 text-left mr-4">
                      Start for free
                    </button>
                  </div>
                </div>

                <div className="flex lg:hidden w-full m-2 p-2 ">
                  <button className="bg-white p-3 rounded-lg font-bold  w-full ">
                    START FOR FREE
                  </button>
                </div>
                <div className="w-full lg:w-1/2 lg:pr-5 py-5 hidden lg:flex ">
                  <Image
                    className="ml-auto my-auto opacity-3"
                    src="/images/Untitled-design-86.png"
                    alt="Pic"
                    width={600}
                    height={765}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl pt-12">
        <div className="container lg:max-w-[1000px] mx-auto  p-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="">
                <h2 className="lg:text-5xl  text-3xl md:text-5xl font-semibold text-[#86198f]  text-center lg:text-left">
                  Single App for All Sports lovers
                </h2>
                <p className="mt-8 text-black font-semibold lg:text-lg text-sm lg:text-left text-center">
                  The easiest tool online for all to bring friends together to
                  have a good game, let it be Futsal, Football or Dota, the
                  basic needs to have a game is all centrally manageable in just
                  a few clicks.
                </p>
                <div className="flex mt-4 lg:text-left ">
                  <HiBadgeCheck size="26px" className="text-[#3735b6]" />
                  <h1 className="font-semibold text-black lg:text-lg text-sm">
                    Discover Venues , Events, Deals, Friends and Tip
                  </h1>
                </div>
                <div className="flex mt-4 lg:text-left">
                  <HiBadgeCheck size="26px" className="text-[#3735b6]" />
                  <h1 className="font-semibold text-black lg:text-lg text-sm">
                    Make New friends and network
                  </h1>
                </div>
                <div className="flex mt-4 lg:text-left ">
                  <HiBadgeCheck size="26px" className="text-[#3735b6]" />
                  <h1 className="font-semibold text-black lg:text-lg text-sm">
                    Buy all your sports needs with the best deals
                  </h1>
                </div>
              </div>
              <div className="mt-10 p-4">
                <div className="w-full lg:w-1/2">
                  <a
                    className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                    href="#"
                  >
                    <button className="animate-bounce  mt-4  mb-12 lg:mr-4 py-[4px] lg:w-full w-full bg-[#c026d3] border-[#c026d3] border-2 rounded-lg text-lg font-bold">
                      LEARN MORE
                    </button>
                  </a>{" "}
                </div>
                <div className="ml-16 mt-4"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-20 opacity-2  ">
              <Image
                className="rounded shadow-md ml-auto my-auto"
                src="/images/Untitled-design-5.gif"
                alt="Pic"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <section className="bg-[#F3F4F6] font-Poppins pt-8 p-4">
          <div className="max-w-[1100px] w-full mx-auto p-4">
            <h1 className="font-bold text-[#3735b6] lg:ml-4 lg:text-left text-center text-2xl ">
              WHY | TAQSEEMA
            </h1>
            <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] ">
              <div className="flex flex-col items-center  bg-[#d127b1]  cursor-pointer  w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="flex items-center">
                  <div>
                    {" "}
                    <AiOutlineNotification size="36px" color="white" />
                  </div>
                </div>
                <h1 className="text-[#fff] text-xl font-bold mt-4 text-center">
                  Increase sales and outreach
                </h1>
              </div>
              <div className="flex flex-col items-center  bg-[#d127b1]  cursor-pointer  w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="flex items-center">
                  <div>
                    {" "}
                    <AiOutlineTransaction size="36px" color="white" />
                  </div>
                </div>
                <h1 className="text-[#fff] text-xl font-bold mt-4 text-center">
                  Enable reservations and online bookings
                </h1>
              </div>

              <div className="flex flex-col items-center bg-[#d127b1]  cursor-pointer  w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="flex items-center">
                  <div>
                    {" "}
                    <AiTwotoneCar size="36px" color="white" />
                  </div>
                </div>
                <h1 className="text-[#fff] text-xl font-bold mt-4">
                  Tracking & progress
                </h1>
              </div>

              <div className="flex flex-col items-center bg-[#d127b1] cursor-pointer w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="flex items-center">
                  <div>
                    {" "}
                    <AiOutlineFileDone size="36px" color="white" />
                  </div>
                </div>
                <h1 className="text-[#fff] text-xl font-bold mt-4 text-center">
                  Financial and transaction reports
                </h1>
              </div>

              <div className="flex flex-col items-center  bg-[#d127b1]  cursor-pointer  w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
                <div className="flex items-center">
                  <div className="">
                    {" "}
                    <AiOutlineSolution
                      className="items-center"
                      size="36px"
                      color="white"
                    />
                  </div>
                </div>
                <h1 className="text-[#fff] text-xl font-bold mt-4 text-center">
                  Flexible pricing, cancellation & rescheduling policies
                </h1>
              </div>

              <div className="flex flex-col items-center bg-[#d127b1]   w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out ">
                <div className="flex item-center">
                  <div>
                    <AiOutlineStock size="36px" color="white" />
                  </div>
                </div>
                <h1 className="text-[#fff] text-xl font-bold mt-4 text-center">
                  Real time alerts and notifications
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F3F4F6] font-Poppins py-10 ">
          <div className="contents lg:max-w-[1100px] w-full pt-18 ">
            <div className="lg:flex  w-full photos">
            <div className="lg:flex lg:w-1/3 thumbnails">
                <div className="containerss">
                  <Image
                    className="ml-auto my-auto opacity-3"
                    src="/images/gm.jpg"
                    alt="Pic"
                    width={300}
                    height={300}
                  />
                  <div className="content">
                    <p className="text-justify text-semibold ">
                      Step into an exciting world of sporting activities and get
                      your muscles pumpin Organise a date with friends for some
                      sporting action, and get active and energised in the
                      variety of indoor and outdoor play spaces.
                    </p>
                  </div>
                </div>

                <div className="black">
                  {" "}
                  <hr className="mt-36 border-2 bg-[#d127b1] border-[#d127b1] w-2/3" />
                </div>
                <div className="title font-bold text-4xl">
                  FIND | GAMES
                </div>
              </div>

              <div className="lg:flex lg:w-1/3 thumbnails">
                <div className="containerss">
                  <Image
                    className="ml-auto my-auto opacity-3"
                    src="/images/ven.jpg"
                    alt="Pic"
                    width={300}
                    height={300}
                  />
                  <div className="content">
                    <p className="text-justify text-semibold ">
                      Step into an exciting world of sporting activities and get
                      your muscles pumpin Organise a date with friends for some
                      sporting action, and get active and energised in the
                      variety of indoor and outdoor play spaces.
                    </p>
                  </div>
                </div>

                <div className="black">
                  {" "}
                  <hr className="mt-36 border-2 bg-[#d127b1] border-[#d127b1] w-2/3" />
                </div>
                <div className="title font-bold text-4xl text-left">
                  FIND | VENUES
                </div>
              </div>

              <div className="lg:flex lg:w-1/3 thumbnails">
                <div className="containerss">
                  <Image
                    className="ml-auto my-auto opacity-3"
                    src="/images/play.jpg"
                    alt="Pic"
                    width={300}
                    height={300}
                  />
                  <div className="content">
                    <p className="text-justify text-semibold ">
                      Step into an exciting world of sporting activities and get
                      your muscles pumpin Organise a date with friends for some
                      sporting action, and get active and energised in the
                      variety of indoor and outdoor play spaces.
                    </p>
                  </div>
                </div>

                <div className="black">
                  {" "}
                  <hr className="mt-36 border-2 bg-[#d127b1] border-[#d127b1] w-2/3" />
                </div>
                <div className="title font-bold text-4xl">
                  FIND | PLAYERS
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden lg:flex">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          />
          <div className=" py-2 w-full bg-[#7e22ce]  text-white">
            <div className="grid grid-cols-6 gap-4 justify-items-center ">
              <div className="text-3xl "></div>
              <div className="text-3xl ">
                {" "}
                {counterOn && (
                  <CountUp start={0} end={6000} duration={2} delay={0} />
                )}
                +<h1 className="text-xl  mt-4 text-[]">ACTIVE USERS</h1>
              </div>
              <div className="text-3xl ">
                {" "}
                {counterOn && (
                  <CountUp start={0} end={6000} duration={2} delay={0} />
                )}
                +<h1 className="text-xl  mt-4 text-[]">TOTAL DOWNLOADS</h1>
              </div>

              <div className="text-3xl">
                {" "}
                {counterOn && (
                  <CountUp start={0} end={8000} duration={2} delay={0} />
                )}
                +<h1 className="text-xl mt-4 text-[]">ONLINE USERS</h1>
              </div>

              <div className="text-3xl  text-center">
                <div>
                  {" "}
                  {counterOn && (
                    <CountUp start={0} end={5000} duration={2} delay={0} />
                  )}
                  +
                </div>
                <h1 className="text-xl mt-4 text-[]">VENUES</h1>
              </div>

              <div className="lg:text-3xl pl-4"></div>
            </div>
          </div>
        </section>
      </section>

      <section className="relative bg-[#F3F4F6] pt-12 mx-auto">
        <div className="max-w-[1500px]   mx-aut0 place-items-center">
          <h1 className="font-bold text-[#3735b6] ml-4 text-2xl text-center ">
            FEATURED | VENUES | TAQSEEMA
          </h1>

          <div className="mt-8 items:left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px]">
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/b.jpg" alt="l" width={400} height={400} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm  font-bold">
                FOOTBALL|CRICKET|VOLLEYBALL
              </h1>

              <h1 className="mt-2 font-bold text-[#86198f] lg:text-[24px] text-lg text-center">
                GROUND(A)
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">
                SEE MORE
              </button>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/kk.jpg" alt="l" width={400} height={400} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm  font-bold">
                FOOTBALL|KICKBALL|JACKS
              </h1>

              <h1 className="mt-2 font-bold text-[#86198f] lg:text-[24px] text-lg text-center">
                GROUND(A)
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">
                SEE MORE
              </button>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/bb.jpg" alt="l" width={400} height={400} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm  font-bold">
                BASKETBALL|CRICKET|VOLLEYBALL
              </h1>

              <h1 className="mt-2 font-bold text-[#86198f] lg:text-[24px] text-lg text-center">
                GROUND(B)
              </h1>
              <div className="flex text-[#FBBF24] gap-[6px] lg:mt-2">
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">
                SEE MORE
              </button>
            </div>
            <div className="flex flex-col items-center cursor-pointer md:items-start bg-white w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out duration-300">
              <Image src="/images/cc.jpg" alt="l" width={400} height={400} />
              <h1 className="mt-2 text-[#0F172A] text-center lg:text-left text-sm  font-bold">
                FOOTBALL|CRICKET|VOLLEYBALL
              </h1>

              <h1 className="mt-2 font-bold text-[#86198f] lg:text-[24px] text-lg text-center">
                GROUND(C)
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
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">
                SEE MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F3F4F6] rounded-2xl pt-12 pb-8 mx-auto p-4 ">
        <div className="container mx-auto sm:px-2 max-w-[1000px]">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2  py-5">
              <div className="">
                <h2 className="lg:text-4xl text-2xl md:text-5xl font-semibold text-[#86198f] lg:text-justify text-center ">
                  PARTNER WITH US
                </h2>
                <p className="mt-8 text-black font-semibold text-lg lg:text-justify text-center">
                  We empower businesses targeting sports and fitness consumers
                  and help them engage with our community to increase outreach.
                  Additionally, our technology solutions also help providers
                  manage their operations efficiently and integrate seamlessly
                  with online booking and sales channels.
                </p>
              </div>
            </div>
            <div className="lg:flex hidden w-full lg:w-1/2 lg:pl-10 py-12 px-24 items-center text-center">
              <a
                className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[white] duration-500"
                href="#"
              >
                <button className="lg:mt-12 lg:mb-18 lg:ml-16 py-[4px] px-10 max-w-full bg-[#c026d3] border-[#c026d3] border-2 rounded-lg text-lg font-bold ">
                  LIST YOUR GROUNDS
                </button>
              </a>{" "}
            </div>
            <div className="flex lg:hidden w-full m-2 p-2 ">
                  <button className="bg-[#c026d3] cursor-pointer  hover:text-[white] duration-500p-3 rounded-lg font-bold  w-full ">
                    LIST YOUR GROUNDS
                  </button>
                </div>
          </div>
        </div>
      </section>
      <footer className="text-white mt-2  bg-[#7e22ce] ">
        <div className="flex flex-wrap py-6">
          <div className="p-5  w-full md:w-1/4">
            <h2 className="font-semibold text-lg ">ABOUT US</h2>
            <p className="text-white mt-3 font-normal text-justify">
              Looking venture justice in evident in totally he do
              ability.Looking venture justice in evident in totally he do
              ability.
            </p>
          </div>

          <div className="p-5  w-full md:w-1/4">
            <h2 className="font-semibold text-lg">QUICK LINKS</h2>
            <p className="text-white mt-3 font-normal">
              ABOUT US
              <br />
              FAQ
              <br />
              PLANS
              <br />
              FEATURES
            </p>
          </div>

          <div className="p-5  w-full md:w-1/4">
            <div>
              <span className="footer-title font-semibold text-lg">
                NEWSLETTER
              </span>
              <div className="form-control w-60 rounded-lg mt-2">
                <label className="label ">
                  <span className="label-text mt-2 text-lg">
                    Enter your email address
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5  w-full md:w-1/4">
            <div className="mt-  gap-4">
              <Image src="/images/apple-app-store.png" alt="l" width={200} height={120} />
             
              <div className=" flex  space-x-4 lg:mt-0 mt-4  w-full  ">
                <RiFacebookCircleLine size="28px" color="#black" />
                <RiTwitterLine size="28px" color="#fff" />
                <RiInstagramLine size="24px" color="#fff" />

                <RiLinkedinBoxLine size="28px" color="#fff" />
                <RiMediumLine size="28px" color="#fff" />

                <RiYoutubeLine size="28px" color="#fff" />

                <RiWhatsappLine size="28px" color="#fff" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-1 lg:flex bg-[#F3F4F6] w-full">
          <div className="text-center w-full lg:mr-12 lg:mt-0 mt-2">
            <h1 className="text-black font-semibold text-center ">
              TERMS & CONDITIONS | PRIVACY POLICY{" "}
            </h1>

            <h1 className="text-black text-center font-semibold ">
              Copyrights Reserved By TAQSeema
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
