import { getMe } from "@/features/auth/services/auth.service";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      try {
        const res = await getMe();
        // console.log(res);
        setUser(res.data.user);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const logout = () => {};

  const value = {
    user,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
