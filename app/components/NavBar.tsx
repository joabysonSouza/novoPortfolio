import React from "react";
import { navLinks } from "../constants/index";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className=" w-full bg-gray-950 ">
      <nav className="flex ">
        <Link
          className=" w-full  flex  gap-4  items-center  text-3xl"
          href={"/"}
        >
          <Image alt="logo" src={logo} width={100} height={100} />
          <span>Joabyson | Develop</span>
        </Link>

        
          <ul className=" w-full flex justify-between mr-20  p-3 text-xl font-extrabold ">
            {navLinks.map((link) => (
              <li key={link.id} >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
      
      </nav>
    </div>
  );
};

export default NavBar;
