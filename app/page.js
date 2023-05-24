import { getSession } from "next-auth/react";
import styles from "./page.module.css";
import Login from "@/components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <main>{/* slider */}</main>
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
