"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Libre_Baskerville, Poppins } from "next/font/google";
import NavBarBtn from "./components/Buttons/NavBarBtn";

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });
const libreBaskervile_normal = Libre_Baskerville({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

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
        " sticky top-0 w-full " // Always have bg-white
      )}
      style={{
        zIndex: 2,
      }}
    >
      <div className="absolute top-0 left-0 w-full">
        <div
          className={classNames(
            " bg-white transition-all duration-500 ease-in-out",
            {
              "bg-opacity-0": !scrolled, // Fully transparent when not scrolled
              "bg-opacity-100": scrolled, // Fully opaque when scrolled
            }
          )}
        >
          <div className="flex flex-row justify-center items-center">
            {/* Logo on the left */}
            <div className="flex items-center px-20">
              <Link href="/" className="mr-auto">
                <Image
                  src="/images/logo.png"
                  width={125}
                  height={125}
                  alt="Thelogo"
                />
              </Link>
            </div>
            <div className="flex items-center px-24">
              {/* Navigation in the center */}
              <nav className="flex">
                <ul className="flex space-x-16 items-center">
                  {links.map((link) =>
                    link.label === "BOOK A CONSULTATION" ? (
                      <Link key={link.href} href={link.href}>
                        <NavBarBtn>
                          <i
                            className={classNames(
                              libreBaskervile_normal.className,
                              "font-bold text-lg"
                            )}
                          >
                            {link.label}
                          </i>
                        </NavBarBtn>
                      </Link>
                    ) : (
                      <Link
                        key={link.href}
                        className={classNames(poppins.className, {
                          "text-[rgb(190,123,62)]":
                            scrolled && link.href === currentPath,
                          "text-zinc-600":
                            scrolled && link.href !== currentPath,
                          "text-white": !scrolled && link.href === currentPath,
                          "text-zinc-300":
                            !scrolled && link.href !== currentPath,
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
