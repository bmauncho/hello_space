"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";

const containerClass = "flex-col space-y-12 px-64";
const logoIconClass = "flex flex-col justify-center items-center";
const iconClass =
  "h-12 w-12 bg-zinc-300 rounded-full flex justify-center items-center group hover:bg-[rgba(190,124,62,0.45)] transition-all delay-150 duration-300 hover:scale-125"; // Added group class
const icon =
  "text-xl text-[rgba(190,124,62,1)] group-hover:text-white transition-colors duration-300"; // Added group-hover:text-white

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="p-5 bg-white">
      <div className={containerClass}>
        <div className={logoIconClass}>
          <div className="transition-all delay-150 hover:scale-110">
            <button onClick={scrollToTop}>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={135}
                  height={135}
                  alt="The logo"
                />
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-12 ">
          <div className="flex flex-row space-x-8 mt-12 mb-12">
            <div className={iconClass}>
              <button>
                <Link href="">
                  <IoLogoTwitter className={icon} />
                </Link>
              </button>
            </div>
            <div className={iconClass}>
              <button>
                <Link href="">
                  <TiSocialFacebook className={icon} />
                </Link>
              </button>
            </div>
            <div className={iconClass}>
              <button>
                <Link href="">
                  <BsInstagram className={icon} />
                </Link>
              </button>
            </div>
            <div className={iconClass}>
              <button>
                <Link href="">
                  <BiLogoTiktok className={icon} />
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t-2 border-[rgba(190,124,62,0.25)] mt-12">
          <p className="flex mt-3 text-[rgba(190,124,62,1)]">
            Copyright ©
            <span className="px-1 text-zinc-500 transition-all hover:text-[rgba(190,124,62,1)]">
              HelloSpace
            </span>
            .All rights reserved...
          </p>
          <div className="flex justify-center transition-all delay-150 hover:scale-110">
            <Link href="https://bmauncho.github.io/BradleyMauncho.github.io/">
              <button className="mt-3 ">🚀</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
