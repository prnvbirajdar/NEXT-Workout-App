import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "./firebase";

const AuthContext = createContext({
  user: null,
  loading: true,
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   auth.onAuthStateChanged(setCurrentUser);
  // }, []);

  useEffect(() => {
    const cancelAuthListener = auth.onAuthStateChanged((u) => {
      //setIsLoggedIn(!!user);
      setUser(u);
      setLoading(false);
      // const { displayName, email } = user;
      // setCurrentUser({
      //   displayName,
      //   email,
      // });
    });

    return () => cancelAuthListener();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, logout:()=> auth.signOut() }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
