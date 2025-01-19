"use client";

import { useSearchParams} from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
    const searchParmas = useSearchParams()
    // get the query if doesn't exist set it empty
    const query = searchParmas.get("query") || "";

   const [searchQuery, setSearchQuery] = useState(query)

  return (
    <div className="flex min-h-[56px] justify-start items-center bg-light-700 rounded-xl px-5">
      <Image src={imgSrc} alt="Search" width={20} height={20} />

      <Input
        src={route}
        value={searchQuery}
        // e => event and this is how we change the value
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="border-none shadow-none focus-visible:ring-transparent"
      />
    </div>
  );
};

export default LocalSearch;
