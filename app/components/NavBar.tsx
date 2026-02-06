"use client";
import React, { useEffect, useState } from "react";
import navLinks from "../constants/navLinks";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full bg-nav2 p-10 fixed top-0 z-50 transition-transform duration-300 ease-in-out
      ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <nav className="flex relative">
        <Link className="w-full flex gap-4 items-center text-3xl" href="/">
          <span className="text-xl font-bold text-red-500">
            Joabyson | Develop
          </span>
        </Link>

        {/* Mobile menu icon */}
        <div className="flex justify-center items-center p-4 md:hidden">
          <CiMenuFries
            color="white"
            className="text-6xl cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>

        {/* Mobile menu */}
        {toggleMenu && (
          <div
            className="w-32 p-5 gap-4 absolute right-10 top-24 rounded-2xl flex flex-col bg-gray-900 md:hidden"
            onClick={() => setToggleMenu(false)}
          >
            {navLinks.map((link) => (
              <a key={link.id} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex w-full font-bold justify-between items-center">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
