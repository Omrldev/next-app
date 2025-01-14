import React from "react";
import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";
import Link from "next/link";
import ROUTES from "@/constants/route";
import Image from "next/image";

const LeftSideNav = () => {
  return (
    <section className="sticky left-0 top-0 shadow-md custom-scrollbar h-svh flex flex-col justify-between pb-28">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <NavLinks />
        </div>

        <div className="flex flex-col gap-2">
          <Button asChild className="btn-secondary w-full min-h-[41px] rounded-lg shadow-none">
            <Link href={ROUTES.SIGN_IN}>
            <Image src={'/icons/account.svg'} alt="sign up" width={23} height={23} className="invert-colors lg:hidden"/>
              <span className="small-medium primary-text-gradient max-lg:hidden">Log in</span>
            </Link>
          </Button>

          <Button asChild className="btn-tertiary w-full min-h-[41px] rounded-lg shadow-none">
            <Link href={ROUTES.SIGN_UP}>
              <Image src={'/icons/sign-up.svg'} alt="sign up" width={23} height={23} className="invert-colors lg:hidden"/>
              <span className="small-medium text-dark400_light900 max-lg:hidden">
                Sign up
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeftSideNav;
