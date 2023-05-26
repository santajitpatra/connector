import Header from "../components/Header";
import Login from "@/components/Login";
import { getSession, useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return <Login />;
  }

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
