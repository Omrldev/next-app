import { hotQuestions, popularTags } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const RightSidebar = () => {
  return (
    <section className="min-h-screen w-[420px] sticky top-0 right-0 shadow-md p-6">
      <div className="w-full">
        <h3>Tops Questions</h3>

        <div className="mt-5 flex flex-col gap-5">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={question._id}
              className="flex justify-between items-center"
            >
              <p className="text-sm">{question.title}</p>
              <Image
                src={"/icons/chevron-right.svg"}
                alt="right arrow"
                width={23}
                height={23}
                className="ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3>Popular Tags</h3>

        <div className="flex flex-col gap-2 mt-5">
          {popularTags.map(({_id, name, questions}) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
