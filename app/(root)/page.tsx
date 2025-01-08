import { auth, signOut } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1>hello world</h1>
    </>
  );
};

export default Home;
