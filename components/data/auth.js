import { useState, useEffect, createContext, Children } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext();

export const AuthProvider = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
