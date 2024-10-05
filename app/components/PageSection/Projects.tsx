import React from "react";
import Image from "next/image";
import ProjectsBtn from "../Buttons/projectsBtn";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";
import classNames from "classnames";

const buttonClass =
  "mt-12 font-bold h-10 w-20 md:h-12 md:w-24 rounded-lg text-center text-white bg-[rgb(190,123,62)] transition-all hover:bg-[rgb(155,106,61)] z-[1]";
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
  const backgroundImage = "/images/page_bg.png";
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-24"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          zIndex: "-1",
        }}
      ></div>
      <div className="flex justify-end items-end">
        <div className="flex flex-col justify-center items-center space-y-6 p-12 min-h-screen mt-12 mb-12">
          <div className="flex">
            <Image
              src="/images/Projects.png"
              width={300}
              height={300}
              alt="projectsimg"
              className="rounded-lg"
            />
          </div>
          <div>
            <h1
              className={classNames(
                libreBaskervile.className,
                "text-2xl font-normal text-center text-white"
              )}
            >
              Explore our exquisite
              <br />
              Furniture Collection
              <br /> now!
            </h1>
          </div>
          <div className="flex">
            <div
              className={classNames(
                libreBaskervile_normal.className,
                buttonClass
              )}
            >
              <Link href={"/furniture"}>
                <ProjectsBtn>
                  <i>Furniture</i>
                </ProjectsBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
