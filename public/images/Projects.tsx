import React from "react";
import Image from "next/image";

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
      >
        <div>
          <Image
            src="/images/"
            width={400}
            height={400}
            alt="projectsimg"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Projects;
