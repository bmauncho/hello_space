import React from "react";
import HeroBtn from "../Buttons/HeroBtn";
import { Baskervville, Libre_Baskerville } from "next/font/google";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import usePageName from "../../hooks/usePageName";
import Link from "next/link";

const heroContainerClass_Main = "flex-col py-20 md:py-40 mb-2 z-[1]"; // Adjust padding for responsiveness
const heroContainerClass =
  "flex-col space-y-12 px-4 sm:px-16 md:px-32 lg:px-64 py-6 sm:py-6 md:py-12 lg:py-18 xl:py-36  mb-12 z-[1]"; // Adjust padding for responsiveness
const headingClass =
  "space-y-6 mt-12 text-4xl md:text-5xl lg:text-7xl text-center text-[rgb(190,123,62)] z-[1]"; // Responsive text sizes
const headingClass_ =
  "space-y-6 mt-12 text-4xl md:text-5xl lg:text-7xl text-center text-white z-[1]"; // Responsive text sizes
const paragraphClass =
  "space-y-6 mt-12 text-center text-white text-sm sm:text-base md:text-lg z-[1]"; // Responsive text sizes
const buttonClass =
  "mt-12 font-bold h-10 w-20 md:h-12 md:w-24 rounded-lg text-white bg-[rgb(190,123,62)] transition-all delay-150 hover:bg-[rgb(155,106,61)] z-[1] hover:scale-125";

const baskervile = Baskervville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const libreBaskervile_normal = Libre_Baskerville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const libreBaskervile = Libre_Baskerville({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const Hero = () => {
  const currentPath = usePathname();
  const pageName = usePageName();
  // Only return content if the path is the homepage
  if (currentPath !== "/") {
    return (
      <div className={heroContainerClass_Main}>
        <div className="flex flex-col justify-center items-center">
          <h1 className={classNames(headingClass_, libreBaskervile.className)}>
            {pageName}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={heroContainerClass}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <p
            className={classNames(
              paragraphClass,
              libreBaskervile_normal.className
            )}
          >
            Casual & Everyday
          </p>
        </div>
        <div className="z-[1]">
          <h1 className={classNames(headingClass, libreBaskervile.className)}>
            Effortlessly blend comfort <br /> & style!
          </h1>
          <p
            className={classNames(
              paragraphClass,
              libreBaskervile_normal.className
            )}
          >
            Effortlessly blend comfort and style with our Casual & Everyday
            collection,
            <br className="hidden md:block" /> featuring cozy sweaters,
            versatile denim, laid-back tees, and
            <br className="hidden md:block" /> relaxed-fit joggers for your
            everyday adventures
          </p>
        </div>
        <div className={buttonClass}>
          <Link href="/shop">
            <HeroBtn>
              <p
                className={classNames(
                  baskervile.className,
                  "justify-center items-center"
                )}
              >
                Shop Now
              </p>
            </HeroBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
