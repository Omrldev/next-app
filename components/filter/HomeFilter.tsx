"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { homeFilters } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { fromUrlQuery, removeUrlQuery } from "@/lib/url";

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const [active, setActive] = useState(filter);

  const handleFilterClick = (filter: string) => {
    let newUrl = "";

    if (filter) {
      setActive(filter);

      newUrl = fromUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase()
      });
    } else {
      setActive("");

      newUrl = removeUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    }

    router.push(newUrl, { scroll: false})
  };

  return (
    <div className="mt-10 max-sm:hidden flex flex-wrap gap-3">
      {homeFilters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            `bg-black text-sm capitalize`,
            active === filter.value
              ? "bg-orange-400 hover:bg-orange-300"
              : "bg-light-400 hover:bg-light-500"
          )}
          onClick={() => handleFilterClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
