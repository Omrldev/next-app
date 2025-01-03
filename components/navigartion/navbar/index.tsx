import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <header>
      <nav className="flex-between background-light900_dark200 fixed z-50 gap-5 p-6 w-full shadow-light-300 dark:shadow-none sm:px-12">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={"/images/site-logo.svg"}
            width={23}
            height={23}
            alt="dev flow logo"
          />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        {/* TO DO */}
        <p>global search</p>

        <div className="flex-between gap-5">
          <Theme />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
