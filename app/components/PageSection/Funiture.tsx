"use client";
import useScrollThreshold from "@/app/hooks/useScrollThreshHold";
import Image from "next/image";
import classNames from "classnames";
import { Libre_Baskerville } from "next/font/google";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const buttonClass =
  "items-start mt-12 font-bold h-10 w-20 md:h-12 md:w-24 rounded-lg text-center text-white bg-[rgb(190,123,62)] transition-all delay-150 hover:bg-[rgb(155,106,61)] z-[1] hover:scale-125";
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
  const BackgroundImage = "/images/funiture_bg.png";

  const [scrolled, setScrolled] = useState(false);
  // const getWindowScrollPosition = () => ({
  //   x: window.scrollX,
  //   y: window.scrollY,
  // });

  // getWindowScrollPosition();
  // console.log(getWindowScrollPosition());
  const scrollThreshold = useScrollThreshold(); // Get the current scroll threshold

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
          "fixed top-24 bg-cover bg-center bg-no-repeat min-h-screen w-full"
        )}
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
          opacity: scrolled ? 1 : 0,
          zIndex: -1,
          transition: "opacity 0.4s ease-in-out",
        }}
      ></div>
      <div className="flex justify-end items-end">
        <div className="absolute top-0 right-24 md:right-0 transform -translate-y-1/3 md:-translate-y-1/3 z-2 flex flex-col justify-center items-center space-y-6 p-6 mr-24 md:p-12 min-h-screen mt-0 mb-6 md:mb-12">
          <div className="flex items-start">
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
                libreBaskervile.className,
                "text-3xl font-normal text-left text-white"
              )}
            >
              Discover the allure
              <br />
              of fashion reinvented!
            </h1>

            <i
              className={classNames(
                libreBaskervile.className,
                "text-xl font-normal text-left text-white "
              )}
            >
              Dive into a world of style with our latest
              <br /> collection! Shop now and redefine your
              <br /> wardrobe narrative!
            </i>
          </div>
          <div className="flex"></div>
        </div>
        <div className="flex flex-col justify-center items-start space-y-6 p-12 mr-24 min-h-screen mt-156 mb-12">
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
                libreBaskervile.className,
                "text-3xl font-normal text-left text-white"
              )}
            >
              Discover the allure
              <br />
              of fashion reinvented!
            </h1>

            <i
              className={classNames(
                libreBaskervile.className,
                "text-xl font-normal text-left text-white "
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
                <button className="w-full">Furniture</button>{" "}
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
