import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

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
          <Link href={"/"} className="flex justify-start items-center gap-2 mb-5">
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
          <SheetTitle className="">Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
