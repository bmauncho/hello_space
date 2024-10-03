"use client";
import React, { PropsWithChildren } from "react";

const NavBarBtn = ({ children }: PropsWithChildren) => {
  return (
    <button className="h-12 w-72 rounded-lg border-2 border-solid border-[rgb(190,123,62)] text-[rgb(190,123,62)] bg-transparent transition-colors duration-300 hover:bg-[rgb(190,123,62)] hover:text-white">
      {children}
    </button>
  );
};

export default NavBarBtn;
