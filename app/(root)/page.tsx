
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";
import Link from "next/link";

const Home = async () => {
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
        local search
      </section>
      home filter

      <div className="mt-11">
        <p>question card 1</p>
        <p>question card 1</p>
        <p>question card 1</p>
        <p>question card 1</p>
      </div>
    </>
  );
};

export default Home;
