import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Model1", href: "/" },
    { name: "YoloV8n", href: "/yolo-v8" },
  ];
  return (
    <div className="w-full bg-main h-[7rem] flex justify-between px-[140px] items-center">
      <div className="Logo font-display text-[50px] text-highlight">
        Run<span className="text-white">way</span>
      </div>
      <div className="navlinks flex items-center justify-between mt-2">
        {navLinks.map((navlink) => (
          <Link
            href={navlink.href}
            className="font-base px-10 text-highlight text-[20px]"
          >
            {navlink.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
