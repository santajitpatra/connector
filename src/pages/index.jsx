import Header from "../components/Header";
import Login from "@/components/Login";
import { getSession, useSession } from "next-auth/react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";

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
        <Widgets/>
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // const posts = await collection(db, "posts")
  //   .orderByChild("timestamp", "desc")
  //   .get();

  // const docs = posts.docs.map((post) => ({
  //   id: post.id,
  //   ...post.data(),
  //   timestamp: null,
  // }));

  return {
    props: {
      session,
    },
  };
};
