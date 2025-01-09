"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import ROUTES from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/icons/hamburger.svg"}
          alt="hamburger logo"
          width={33}
          height={33}
          className="invert-colors md:hidden cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent side={"left"} className="border-none">
        <SheetHeader>
          <Link
            href={"/"}
            className="flex justify-start items-center gap-2 mb-5"
          >
            <Image
              src={"/images/site-logo.svg"}
              alt="logo"
              width={23}
              height={23}
            />

            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
              Dev<span className="text-primary-500">Flow</span>
            </p>
          </Link>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <SheetDescription className="hidden">Description</SheetDescription>

          <div className="h-[calc(100vh-120px)] flex flex-col justify-between">
            <SheetClose asChild>
              <section>
                <NavLinks isMobileNav/>
              </section>
            </SheetClose>

            <div className="flex flex-col gap-2">
              <SheetClose asChild>
                <Link href={ROUTES.SIGN_IN}>
                  <Button className="btn-secondary w-full min-h-[41px] rounded-lg shadow-none">
                    <span className="small-medium primary-text-gradient">Log in</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href={ROUTES.SIGN_UP}>
                  <Button className="btn-tertiary w-full min-h-[41px] rounded-lg shadow-none">
                    <span className="small-medium text-dark400_light900">Sign up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
