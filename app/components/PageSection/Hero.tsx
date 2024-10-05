import React from "react";
import HeroBtn from "../Buttons/HeroBtn";
import { Baskervville, Libre_Baskerville } from "next/font/google";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import usePageName from "../../hooks/usePageName";
import Link from "next/link";

const heroContainerClass_Main = " flex-col py-40 mb-2"; // Adjust the width and padding as needed
const heroContainerClass = " flex-col space-y-12 px-64 py-60 mb-12"; // Adjust the width and padding as needed
const headingClass =
  " space-y-6 mt-12 text-7xl text-center text-[rgb(190,123,62)]";
const headingClass_ = " space-y-6 mt-12 text-7xl text-center text-white";
const paragraphClass = " space-y-6 mt-12 text-center text-white text-lg";
const buttonClass =
  " space-y-6 mt-12 font-bold h-12 w-24 rounded-lg text-white bg-[rgb(190,123,62)] transition-all hover:bg-[rgb(155,106,61)]";

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
        <div
          className="flex flex-col justify-center items-center"
          style={{
            zIndex: 1,
          }}
        >
          <h1
            className={classNames(headingClass_, libreBaskervile.className)}
            style={{
              zIndex: 1,
            }}
          >
            {pageName}
          </h1>
        </div>
      </div>
    ); // Return nothing if it's not the homepage
  }

  return (
    <div className={heroContainerClass}>
      <div
        className="flex flex-col justify-center items-center"
        style={{
          zIndex: 1,
        }}
      >
        <div className="flex justify-center">
          <p
            className={classNames(
              paragraphClass,
              libreBaskervile_normal.className
            )}
            style={{
              zIndex: 1,
            }}
          >
            Casual & Everyday
          </p>
        </div>
        <div
          style={{
            zIndex: 1,
          }}
        >
          <h1
            className={classNames(headingClass, libreBaskervile.className)}
            style={{
              zIndex: 1,
            }}
          >
            Effortlessly blend comfort <br /> & style!
          </h1>
          <p
            className={classNames(
              paragraphClass,
              libreBaskervile_normal.className
            )}
            style={{
              zIndex: 1,
            }}
          >
            Effortlessly blend comfort and style with our Casual & Everyday
            collection,
            <br /> featuring cozy sweaters, versatile denim, laid-back tees, and
            relaxed-fit
            <br /> joggers for your everyday adventures
          </p>
        </div>
        <div
          className={buttonClass}
          style={{
            zIndex: 1,
          }}
        >
          <Link href="/shop">
            <HeroBtn>
              <p
                className={classNames(
                  baskervile.className,
                  "justify-center items-center"
                )}
                style={{
                  zIndex: 1,
                }}
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
