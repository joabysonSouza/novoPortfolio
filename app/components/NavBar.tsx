"use client";
import React, { useState } from "react";
import { navLinks } from "../constants/index";
import { CiMenuFries } from "react-icons/ci";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className=" w-screen bg-gray-950 fixed top-0 z-50 mb-60">
      <nav className="flex relative ">
        <Link
          className=" w-full  flex  gap-4  items-center  text-3xl"
          href={"/"}
        >
          <Image alt="logo" src={logo} width={100} height={100} />
          <span className="text-xl">Joabyson | Develop</span>
        </Link>

        <div className="flex justify-center items-center p-4 md:hidden">
          <CiMenuFries
            color="white"
            className="text-6xl"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
        </div>

        {toggleMenu && (
          <div
            className=" w-32 p-5 gap-4 absolute right- 60 left-64 flex top-24  rounded-2xl justify-center items-start   flex-col  bg-gray-900   md:hidden"
            onClick={() => setToggleMenu(false)}
          >
            
            {navLinks.map((link) => (
              <ul key={link.id}>
                <li >
                  <a href={link.href}>{link.label}</a>
                </li>
                  </ul>
            ))}
          </div>
        )}

        <div className=" hidden md:flex w-full  justify-between items-center mr-7  ">
          {navLinks.map((link) => (
              <ul key={link.id} className="">
                <li >
                  <a href={link.href}>{link.label}</a>
                </li>
                  </ul>
            ))}

        </div>

        
      </nav>
    </div>
  );
};

export default NavBar;
