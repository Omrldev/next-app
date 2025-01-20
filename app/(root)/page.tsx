

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
] 

interface PropSearchParams {
  searchParams: Promise<{[ key: string]: string}>
}

const Home = async ({ searchParams}: PropSearchParams) => {
  const {query = ''} = await searchParams
  const filterQuestions = questions.filter((question) => (question.title.toLowerCase().includes(query?.toLowerCase())))

  return (
    <>
      <section className="w-full flex justify-between flex-col-reverse lg:flex-row gap-3">
        <h1 className="text-2xl font-bold">All Questions</h1>

        <Button asChild className="primary-gradient">
          <Link href={ROUTES.ASK_QUESTIONS}>
            <span>Ask a Question</span>
          </Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
      </section>
      home filter
      <div className="mt-11">
        {filterQuestions.map((question) => (
          <Link key={question._id} href={""} className="flex flex-col">{question.title}</Link>
        ))}
      </div>
    </>
  );
};

export default Home;
