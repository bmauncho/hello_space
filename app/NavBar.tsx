"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Poppins } from "next/font/google";
import NavBarBtn from "./components/NavBarBtn";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Shop", href: "/shop" },
    { label: "Furniture", href: "/furniture" },
    { label: "BOOK A CONSULTATION", href: "/contactUs" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(
        "grid grid-flow-col auto-cols-auto px-16 m-auto box-border sticky top-0 transition-all duration-500 ease-in-out",
        {
          "bg-white bg-opacity-0": !scrolled, // Transparent background with no opacity
          "bg-white bg-opacity-100": scrolled, // Opaque white background
        }
      )}
      style={{
        zIndex: 2,
      }}
    >
      <div className="grid box-border">
        <Link href="/" className="ml-48">
          <Image
            src="/images/logo.png"
            width={135}
            height={135}
            alt="Thelogo"
          />
        </Link>
      </div>
      <div className="grid box-border">
        <nav className="flex space-x-12 mr-24 mb-5 px-5 h-30 items-center">
          <ul className="flex space-x-12 items-center">
            {links.map((link) =>
              link.label === "BOOK A CONSULTATION" ? (
                <Link key={link.href} href={link.href}>
                  <NavBarBtn>{link.label}</NavBarBtn>
                </Link>
              ) : (
                <Link
                  key={link.href}
                  className={classNames(poppins.className, {
                    "text-[rgb(190,123,62)]":
                      scrolled && link.href === currentPath,
                    "text-zinc-600": scrolled && link.href !== currentPath,
                    "text-white": !scrolled && link.href === currentPath,
                    "text-zinc-300": !scrolled && link.href !== currentPath,
                    "hover:text-[rgb(190,123,62)] transition-colors ease-out duration-400":
                      true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
