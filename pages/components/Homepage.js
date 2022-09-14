import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";
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
            className="lg:hidden text-left"
            placement="left"
          />
          <Drawer
            width="100%"
            visible={isNavExpanded}
            placement="left"
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
              <ul className="mt-4 lg:hidden font-bold text-white">
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

      </section>


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
      


      <section className="bg-white rounded-2xl pt-12">
        <div className="container max-w-[1200px] mx-auto sm:px-28 ">
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
                <div className="flex mt-4 lg:text-left text-center">
                <HiBadgeCheck size="26px" className="text-[#3735b6]" />
                <h1 className="font-semibold text-black text-lg">
                  Discover Venues , Events, Deals, Friends and Tip
                </h1>
                   </div>
              <div className="flex mt-4">
                <HiBadgeCheck size="26px" className="text-[#3735b6]" />
                <h1 className="font-semibold text-black text-lg">
                Make New friends and network
                </h1>
                      </div>
                 <div className="flex mt-4">
                <HiBadgeCheck size="26px" className="text-[#3735b6]" />
                <h1 className="font-semibold text-black text-lg">
                Buy all your sports needs with the best deals
                </h1>
             </div>

                
                
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
            <div className="w-full lg:w-1/2 lg:pr-18 opacity-2  ">
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

        <section className="bg-[#F3F4F6] font-Poppins pt-8 ">
          <div className="max-w-[1100px] w-full mx-auto ">
            <h1 className="font-bold text-[#3735b6] ml-4 text-2xl ">WHY | TAQSEEMA</h1>
            <div className="mt-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] ">
              <div className="flex flex-col items-left  bg-[#d127b1]  cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
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
              <div className="flex flex-col items-center  bg-[#d127b1]  cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
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

              <div className="flex flex-col items-center bg-[#d127b1]  cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
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

              <div className="flex flex-col items-center bg-[#d127b1] cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
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

              <div className="flex flex-col items-center  bg-[#d127b1]  cursor-pointer md:items-start w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] ">
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

              <div className="flex flex-col items-center bg-[#d127b1] md:items-start  w-full p-[30px] rounded-[20px] shadow-[0_24px_54px_#00000005] hover:shadow-[0_24px_54px_#0000000D] transition ease-in-out ">
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


        <section className="bg-[#F3F4F6] font-Poppins py-10 ">
          
          <div className="contents max-w-[1100px] pt-18 ">

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
       
          <section className="">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        />
        <div className=" py-2 w-full bg-[#7e22ce]  text-white">
          <div className="grid grid-cols-5 gap-4 justify-items-center l">
            <div className="text-3xl ">
              {" "}
              {counterOn && (
                <CountUp start={0} end={6000} duration={2} delay={0} />
              )}
              +<h1 className="text-xl font-bold mt-4 text-[]">PRODUCTS</h1>
            </div>

            <div className="text-3xl">
              {" "}
              {counterOn && (
                <CountUp start={0} end={4000} duration={2} delay={0} />
              )}
              +<h1 className="text-xl font-bold mt-4 text-[]">BOOKINGS</h1>
            </div>

            <div className="text-3xl">
              {" "}
              {counterOn && (
                <CountUp start={0} end={8000} duration={2} delay={0} />
              )}
              +<h1 className="text-xl font-bold mt-4 text-[]">GAMES</h1>
            </div>

            <div className="text-3xl pl-4">
              {" "}
              {counterOn && (
                <CountUp start={0} end={5000} duration={2} delay={0} />
              )}
              +<h1 className="text-xl font-bold mt-4 text-[]">VENUS</h1>
            </div>
            <div className="lg:text-3xl pl-4">
              {" "}
              {counterOn && (
                <CountUp start={0} end={8000} duration={2} delay={0} />
              )}
              +<h1 className="lg:text-xl font-bold mt-4 text-sm">PLAYERS</h1>
            </div>
          </div>
        </div>
      </section>

      
      </section>





      
      <section className="relative bg-[#F3F4F6] pt-12 mx-auto">
        <div className="max-w-[1500px]   mx-aut0 place-items-center">
        <h1 className="font-bold text-[#3735b6] ml-4 text-2xl text-center ">BEST | GROUNDS | TAQSEEMA</h1>


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
                <AiFillStar size="24px" color="#FBBF24" />
                <AiFillStar size="24px" color="#FBBF24" />
              </div>
              <p className="mt-2 text-[#0F172A] lg:text-[16px] text-sm lg:text-left text-center font-bold">
                Looking venture justice in evident in totally he do ability.
              </p>
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">SEE MORE</button>
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
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">SEE MORE</button>
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
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">SEE MORE</button>
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
              <button className="mt-4 bg-[#c026d3] border-[#c026d3] border-2 text-sm font-bold text-white text-left p-2 rounded-lg">SEE MORE</button>
            </div>
            
            </div>    
            

          
          
        </div>
      </section>
     



      <section className="relative bg-[#F3F4F6] rounded-2xl pt-12 pb-8 mx-auto ">
          <div className="container mx-auto sm:px-2 max-w-[1000px]">
            <div className="flex flex-wrap">
              
              <div className="w-full lg:w-1/2  py-5">
                <div className="">
                  <h2 className="text-4xl md:text-5xl font-semibold text-[#86198f] text-justify">
                    PARTNER WITH US
                  </h2>
                  <p className="mt-8 text-black font-semibold text-lg text-justify">
                    We empower businesses targeting sports and fitness consumers
                    and help them engage with our community to increase
                    outreach. Additionally, our technology solutions also help
                    providers manage their operations efficiently and integrate
                    seamlessly with online booking and sales channels.
                  </p>
                </div>
              </div>
              <div className=" lg:w-1/2 lg:pl-10 py-12 flex ">
                <a
                  className="text-white text-xl font-[Poppins] cursor-pointer  hover:text-[black] duration-500"
                  href="#"
                >
                  <button className="mt-12 mb-18 ml-16 py-[4px] px-[30px] bg-[#7e22ce] border-[#7e22ce] border-2 rounded-lg text-lg font-bold ">
                    LIST YOUR GROUNDS
                  </button>
                </a>{" "}
              </div>
            </div>
          </div>

          
            
        </section>
      <footer className="text-white mt-2  bg-[#7e22ce] ">
        <div className="flex flex-wrap py-12">
          <div className="p-5  w-full md:w-1/4">
            <h2 className="font-extrabold text-lg ">ABOUT US</h2>
            <p className="text-white mt-3 font-bold text-justify">
            Looking venture justice in evident in totally he do ability.Looking venture justice in evident in totally he do ability.
            </p>
          </div>
          
          <div className="p-5  w-full md:w-1/4">
            <h2 className="font-extrabold text-lg">QUICK LINKS</h2>
            <p className="text-white mt-3 font-bold">
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
    <span className="footer-title font-bold text-lg">NEWSLETTER</span> 
    <div className="form-control w-60 rounded-lg mt-2">
      <label className="label ">
        <span className="label-text mt-2 text-lg">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
          </div>
         
          <div className="p-5  w-full md:w-1/4">
            <div className="mt-  gap-4">
              <Image src="/images/ios.png" alt="l" width={180} height={60} />
              <Image
                src="/images/play-store-logo.png"
                alt="l"
                width={180}
                height={60}
                
              />
            </div>
          </div>
          
        </div>
        <div className="p-3 bg-black w-full">
        <div className="flex  space-x-3 w-1/2 mx-auto">
          <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="" target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>

            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>

          <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="" target="_blank" rel="noreferrer">
          <span className="sr-only"> Instagram </span>

            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>

          <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="" target="_blank" rel="noreferrer">
            <span className="sr-only"> Twitter </span>

            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>

          <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="" target="_blank" rel="noreferrer">
            <span class="sr-only"> GitHub </span>

            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>

          <a class="p-2 border rounded-full border-white/25 hover:opacity-75" href="" target="_blank" rel="noreferrer">
            <span class="sr-only"> Dribbble </span>

            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
            </svg>
          </a>
          <div className=" mx-auto">
          <h1 className="text-white ml-6 ">Copyright @2022 XYZ  Powered By Thaksf</h1>
          </div>
        </div>
        
        </div>

      </footer>
    </div>
  );
}

export default Homepage;
