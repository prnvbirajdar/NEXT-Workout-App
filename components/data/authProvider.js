import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "./firebase";
import { useRouter } from "next/router";

//initial context
const AuthContext = createContext({
  user: null,
  loading: true,
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); //user state
  const [loading, setLoading] = useState(true); //loading state

  const router = useRouter();

  //checks if auth works, assign user and loading values
  useEffect(() => {
    const cancelAuthListener = auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });

    return () => cancelAuthListener();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout: () => {
          auth.signOut();
          router.push("/");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
