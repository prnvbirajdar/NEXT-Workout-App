import React, { useEffect } from "react";
import { useAuth } from "../components/data/authProvider";
import Login from "../components/Login";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const { user, loading } = useAuth(); //context

  const router = useRouter(); //routing to /home

  //if user exists, go to home page
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  //if loading return null
  if (loading) return null;

  //if user doesn't exist, stay at Login
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <section>{!user && <Login />}</section>
    </React.Fragment>
  );
}
