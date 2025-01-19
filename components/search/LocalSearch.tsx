"use client";

import { useRouter, useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import { fromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""

  const [queryString, setQueryString] = useState(query)

  useEffect(() => {
    if (queryString) {
      const newUrl = fromUrlQuery({
        params: searchParams.toString(),
        key: "query",
        value: queryString
      })

      router.push(newUrl, { scroll: false})
    }
  }, [queryString, router, route, searchParams])
  

  return (
    <div className="flex min-h-[56px] justify-start items-center bg-light-700 rounded-xl px-5">
      <Image src={imgSrc} alt="Search" width={20} height={20} />

      <Input
        src={route}
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
        placeholder={placeholder}
        className="border-none shadow-none focus-visible:ring-transparent"
      />
    </div>
  );
};

export default LocalSearch;
