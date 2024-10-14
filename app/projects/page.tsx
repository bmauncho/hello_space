import React from "react";
import Card from "../components/Cards/Card";
// import CardBtn from "../components/Buttons/CardBtn";
// import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white">
      <div className="flex flex-wrap space-x-4">
        <div>
          <Card
            imageSrc="/images/Furniture_2.png"
            imageAlt="Project_1"
            title="Modern Minimalist Loft"
            description="A sleek, open-concept space with clean lines, neutral tones, and natural materials for a serene, functional feel."
            link="/"
          >
            {/* <div>
              <Link href="/">
                <CardBtn />
              </Link>
            </div> */}
          </Card>
        </div>
        <div>
          <Card
            imageSrc="/images/Project_2.png"
            imageAlt="Project_2"
            title="Cozy Retreat"
            description="Warm woods, soft textures, and earthy tones create an inviting, light-filled, hygge-inspired space."
            link="/"
          >
            {/* <div>
              <Link href="/">
                <CardBtn />
              </Link>
            </div> */}
          </Card>
        </div>
        <div>
          <Card
            imageSrc="/images/Project_3.png"
            imageAlt="Project_3"
            title="Cozy Modern Loft"
            description="Neutral tones, natural materials, and clean lines come together to form a calming, minimalist space with a serene, airy ambiance"
            link="/"
          >
            {/* <div>
              <Link href="/">
                <CardBtn />
              </Link>
            </div> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
