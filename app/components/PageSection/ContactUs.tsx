import React from "react";
import { Baskervville, Poppins } from "next/font/google";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiMapPinLineFill } from "react-icons/pi";
import classNames from "classnames";
import ContactUsForm from "./ContactUsForm";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });
const baskervile = Baskervville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

interface ContactUsDetails {
  id: number;
  icon: React.ReactElement;
  title: string;
  text: string;
}

const ContactUs = () => {
  const contactUsDetails: ContactUsDetails[] = [
    {
      id: 1,
      icon: <MdOutlineMailOutline />,
      title: "Email",
      text: "spacehello43@gmail.com",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: "Phone",
      text: "+254 745 270 260",
    },
    {
      id: 3,
      icon: <PiMapPinLineFill />,
      title: "Location",
      text: "Nairobi, Kenya",
    },
  ];

  const getHref = (detail: ContactUsDetails) => {
    if (detail.id === 1) {
      return `mailto:${detail.text}`;
    } else if (detail.id === 2) {
      return `tel:${detail.text}`;
    } else {
      return undefined; // No href for Location (id 3)
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="w-full max-w-4xl flex flex-wrap p-10 items-start justify-center">
        {/* Contact Details Section */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-start">
          <h1
            className={classNames(
              baskervile.className,
              "text-4xl contact-title mb-8 text-left"
            )}
          >
            Contact Details
          </h1>
          <div
            className={classNames(
              poppins.className,
              "mb-12 flex flex-col space-y-12"
            )}
          >
            {contactUsDetails.map((detail) => (
              <div key={detail.id} className="flex flex-row items-center">
                <div className="mr-4 bg-[#e6cac4] h-12 w-12 rounded-full flex justify-center items-center group">
                  {/* Only wrap in <a> if there's an href */}
                  {getHref(detail) ? (
                    <a href={getHref(detail)} className="text-zinc-600">
                      {detail.icon}
                    </a>
                  ) : (
                    <span className="text-zinc-600">{detail.icon}</span>
                  )}
                </div>
                <div>
                  <h2 className="text-base tracking-[.25rem] text-zinc-600">
                    {detail.title}
                  </h2>
                  <p>{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
