"use client";
import React from "react";
import Image from "next/image";
import ProjectsBtn from "../Buttons/projectsBtn";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";
import classNames from "classnames";
import useDeviceSize from "@/app/hooks/useDeviceSize";
const buttonClass =
  "mt-6 md:mt-12 font-bold h-10 w-32 md:h-12 md:w-36 rounded-lg text-center text-white bg-[rgb(190,123,62)] transition-all delay-150 hover:bg-[rgb(155,106,61)] z-[1] hover:scale-125";
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

const Projects = () => {
  const isSmallScreen = useDeviceSize();
  const backgroundImage = {
    default: "/images/page_bg.png", // Default for mobile
    md: "/images/fixedBg.png", // Medium screens and above
  };
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('${
            isSmallScreen ? backgroundImage.md : backgroundImage.default
          }')`,
          backgroundSize: "cover",
          zIndex: "-1",
        }}
      ></div>
      <div className="flex justify-center items-center lg:justify-end lg:items-end min-h-screen">
        <div className="flex flex-col justify-center items-center space-y-6 p-6 sm:p-12 md:p-16 lg:p-24">
          <div className="flex justify-center">
            <Image
              src="/images/Projects.png"
              width={300}
              height={300}
              alt="projectsimg"
              className="rounded-lg w-full max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
          <div>
            <h1
              className={classNames(
                libreBaskervile.className,
                "text-xl md:text-2xl font-normal text-center text-white"
              )}
            >
              Explore our exquisite
              <br />
              Project Collection!
            </h1>
          </div>
          <div
            className={classNames(
              buttonClass,
              libreBaskervile_normal.className,
              "flex justify-center items-center"
            )}
          >
            <Link href={"/projects"}>
              <ProjectsBtn>
                <i>Projects</i>
              </ProjectsBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
