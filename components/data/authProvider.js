import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "./firebase";
import { useRouter } from "next/router";

const AuthContext = createContext({
  user: null,
  loading: true,
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

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
