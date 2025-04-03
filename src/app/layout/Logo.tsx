import Image from "next/image";
import React from "react";
import logo from "@/public/img/ui/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="w-16 h-16 overflow-hidden relative rotate-90">
      <Image alt="logo" src={logo} className="object-cover object-left" fill sizes="80" />;
    </Link>
  );
};

export default Logo;
