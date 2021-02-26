import { useEffect } from "react";
import { useAuth } from "../components/data/authProvider";
import Login from "../components/Login";
import { useRouter } from "next/router";

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
  return !user && <Login />;
}
