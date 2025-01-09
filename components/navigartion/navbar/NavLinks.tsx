"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const linkComponent = (
          <Link href={item.route} key={item.label} className="invert-colors">
            <Image src={item.imgURL} alt={item.label} width={20} height={20} />
            <p>{item.label}</p>
          </Link>
        );

        return linkComponent;
      })}
    </>
  )
}

export default NavLinks;
