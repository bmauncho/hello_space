"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";
import Image from "next/image";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Shop", href: "/shop" },
    { label: "Furniture", href: "/furniture" },
    { label: "ContactUs", href: "/contactUs" },
  ];

  return (
    <div>
      <nav className="flex space-x-12 border-b mb-5 px-5 h-60 items-center justify-center">
        <Link href="/" className="">
          <Image
            src="/images/logo.png"
            width={150}
            height={150}
            alt="Thelogo"
          />
        </Link>
        <ul className="flex space-x-12">
          {links.map((link) => (
            <Link
              key={link.href}
              className={classNames({
                active: currentPath === link.href,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
