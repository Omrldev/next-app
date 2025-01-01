import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/route";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
    <form
    className="pt-[120px] px-10"
    action={ async () => {
      'use server'

      await signOut({redirectTo: ROUTES.SIGN_IN})
    }}
    >
      <Button type="submit">Log out</Button>
    </form>
    </>
  );
};

export default Home;
