"use client";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { navData } from "@/public/data/layout";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Logo from "./Logo";

const Header = () => {
  const navItem = usePathname();

  return (
    <header>
      <nav className="max-w-[1440px] justify-between items-center mx-auto flex pb-4 z-50">
        <Logo />
        <ul className="flex items-center z-50">
          {navData.links.map((item) => (
            <li key={item.id} className="mx-2.5">
              <Link
                href={item.link}
                className={`font-medium transition-all hover:font-semibold ${navItem === item.link && "text-black"}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
