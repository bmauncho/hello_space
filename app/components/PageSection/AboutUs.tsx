"use client";
import classNames from "classnames";
import { Libre_Baskerville } from "next/font/google";
import React from "react";
import Image from "next/image";

const libreBaskervile_normal = Libre_Baskerville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#e6cac4] px-4 md:px-16 lg:px-32 xl:px-64">
      <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
        <div className="md:w-1/2">
          <Image
            src="/images/AboutUs_.png"
            width={400}
            height={400}
            alt="AboutUs_"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="flex items-center mb-4">
            <h1
              className={classNames(
                libreBaskervile_normal.className,
                "text-4xl md:text-6xl xl:text-8xl font-bold text-white mt-12"
              )}
            >
              About us
            </h1>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hello Space started as a small interior design firm in
            Nairobi,Kenya, aiming to help home buyers to make do with the new
            space that they had acquired. It soon became obvious that it would
            make sense to help our clients see beyond the walls and floor plans,
            and be there with them from the get-go.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Currently, we offer house realtor, interior design, and architecture
            services in order to help our customers find their forever homes as
            seamlessly and painlessly as possible. We value our customers above
            everything else, meaning that we won’t take “OK” as an answer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
