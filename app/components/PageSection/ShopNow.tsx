import classNames from "classnames";
import { Libre_Baskerville } from "next/font/google";
import Link from "next/link";
import React from "react";
import ShopNowBtn from "../Buttons/ShopNowBtn";

const buttonClass =
  "mt-6 md:mt-12 font-bold h-10 w-24 md:h-12 md:w-28 rounded-lg text-center text-white bg-[rgb(190,123,62)] transition-all delay-150 hover:bg-[rgb(155,106,61)] z-[1] hover:scale-125";

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

const ShopNow = () => {
  const BackgroundImage = "/images/ShopNow_Bg.png";
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen w-full"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <div className="flex justify-start items-start w-full h-full">
          <div className="flex flex-col justify-center items-start space-y-6 p-4  ml-64 sm:p-6 lg:p-12 min-h-screen">
            <div>
              <i
                className={classNames(
                  libreBaskervile_normal.className,
                  "text-lg sm:text-xl lg:text-xl text-left text-white"
                )}
              >
                Home & Office
              </i>
            </div>
            <div>
              <h1
                className={classNames(
                  libreBaskervile.className,
                  "text-lg sm:text-4xl lg:text-6xl font-normal text-left text-white"
                )}
              >
                Professional
                <br /> pinstripe blazers
                <br /> collection
              </h1>
            </div>
            <div>
              <i
                className={classNames(
                  libreBaskervile_normal.className,
                  "text-lg sm:text-xl lg:text-xl text-left text-white"
                )}
              >
                Elevate your workwear with our Professional <br />
                Pinstripe Blazers Collection, where tailored
                <br /> sophistication meets modern confidence for
                <br /> a powerfully polished office look.
              </i>
            </div>
            <div className="flex">
              <div
                className={classNames(
                  libreBaskervile_normal.className,
                  buttonClass
                )}
              >
                <Link href={"/shop"}>
                  <ShopNowBtn>
                    <i>Shop Now</i>
                  </ShopNowBtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
