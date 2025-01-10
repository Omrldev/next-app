"use client";

import React from "react";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userId = 1;

  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

          if (item.route === "/profile") {
            if (userId) item.route = `${item.route}/${userId}`;
            else return null;
          }

        const linkComponent = (
          <Link href={item.route} key={item.label} className={cn(isActive ? 'primary-gradient rounded-lg text-light900' : 'text-dark300_light900 bg-transparent', "flex justify-start items-center gap-4 p-4")}>
            <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn("invert-colors",{"invert-color" : !isActive})} />
            <p className={cn(isActive ? 'font-bold' : 'font-light', !isMobileNav && 'max-lg:hidden')}>{item.label}</p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {linkComponent}
          </SheetClose>
        ): (<React.Fragment key={item.route}>
          {linkComponent}
        </React.Fragment>)
      })}
    </>
  );
};

export default NavLinks;
