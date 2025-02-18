"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "home" },
  { title: "About Us", path: "about-us" },
  { title: "Services", path: "services" },
  { title: "Success Stories", path: "sucess-stories" },
  { title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-white text-blue-600 shadow-md">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-3">
        <Link href="/">
        <div  className="flex justify-left">
        <Image
                    src="/images/uprise.png"
                    width={100}
                    height={10}
                    style={{alignContent:'flex-start'}}
                    alt="Uprise Education"
                    className="rounded-lg shadow-2xl transform transition-all hover:scale-110 hover:shadow-2xl duration-300"
                  />
                  </div>
        </Link>
        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-gray-300 text-blue-600 hover:border-blue-500"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-gray-300 text-blue-600 hover:border-blue-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-blue-600 hover:bg-blue-700 hover:text-white font-medium px-4 py-2 rounded transition"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
