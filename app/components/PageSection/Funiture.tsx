"use client";
import useScrollThreshold from "@/app/hooks/useScrollThreshHold";
import Image from "next/image";
import classNames from "classnames";
import { Libre_Baskerville } from "next/font/google";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useDeviceSize from "@/app/hooks/useDeviceSize";

const buttonClass =
  "items-start mt-12 font-bold h-10 w-20 md:h-12 md:w-24 rounded-lg text-center text-white bg-[rgb(190,123,62)] transition-all delay-150 hover:bg-[rgb(155,106,61)] z-[1] hover:scale-125";
const libreBaskervile_bold = Libre_Baskerville({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});
const libreBaskervile = Libre_Baskerville({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});
const libreBaskervile_normal = Libre_Baskerville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const Funiture = () => {
  const [scrolled, setScrolled] = useState(false);
  const scrollThreshold = useScrollThreshold();
  const isSmallScreen = useDeviceSize();

  const backgroundImage = {
    default: "/images/funiture_bg.png", // Default for mobile
    md: "/images/fixedBg_2.png", // Medium screens and above
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]); // Add scrollThreshold to dependency array

  return (
    <div className="relative min-h-screen">
      <div
        className={classNames(
          "fixed  lg:top-24 top-20 bg-cover bg-center bg-no-repeat min-h-screen w-full"
        )}
        style={{
          backgroundImage: `url('${
            isSmallScreen ? backgroundImage.md : backgroundImage.default
          }')`,
          opacity: scrolled ? 1 : 0,
          zIndex: -1,
          transition: "opacity 0.4s ease-in-out",
        }}
      ></div>
      <div className="flex lg:justify-end lg:items-end">
        {/*founder 1*/}
        <div className="absolute top-0 right-24 md:right-0 space-y-6 transform translate-x-40 lg:translate-x-0 -translate-y-1/3 md:-translate-y-1/3 z-2">
          <div className="flex flex-col justify-center items-start space-y-6 lg:p-6 mr-24  min-h-screen mt-0 mb-6">
            <div className="flex">
              <Image
                src="/images/Owner_1.png"
                width={300}
                height={300}
                alt="projectsimg"
                className="rounded-lg w-auto"
              />
            </div>
            <div className="">
              <h1
                className={classNames(
                  libreBaskervile_bold.className,
                  "text-xl lg:text-3xl font-normal text-left text-white"
                )}
              >
                Discover the allure
                <br />
                of fashion reinvented!
              </h1>

              <i
                className={classNames(
                  libreBaskervile.className,
                  " text-sm lg:text-xl font-normal text-left text-white "
                )}
              >
                Dive into a world of style with our latest
                <br /> collection! Shop now and redefine your
                <br /> wardrobe narrative!
              </i>
            </div>
            <div className="flex"></div>
          </div>
        </div>

        {/*founder 2*/}
        <div className="flex flex-col justify-center items-start space-y-6 p-12 mr-24 min-h-screen mt-96 lg:mt-156 mb-12">
          <div className="flex">
            <Image
              src="/images/Owner_2.png"
              width={300}
              height={300}
              alt="projectsimg"
              className="rounded-lg w-auto"
            />
          </div>
          <div>
            <h1
              className={classNames(
                libreBaskervile_bold.className,
                "text-xl lg:text-3xl font-normal text-left text-white"
              )}
            >
              Discover the allure
              <br />
              of fashion reinvented!
            </h1>

            <i
              className={classNames(
                libreBaskervile.className,
                "text-sm lg:text-xl font-normal text-left text-white "
              )}
            >
              Dive into a world of style with our latest
              <br /> collection! Shop now and redefine your
              <br /> wardrobe narrative!
            </i>
          </div>
          <div className="flex justify-start">
            <Link href="/furniture">
              <div
                className={classNames(
                  libreBaskervile_normal.className,
                  buttonClass,
                  "flex justify-center items-center" // Add these classes for centering
                )}
              >
                <button className="w-full flex justify-center items-center text-xs lg:text-base">
                  <i>Furniture</i>
                </button>{" "}
                {/* Make button take full width */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funiture;
