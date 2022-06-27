import axios from "axios";
import { API_HOST } from "../config";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as userApi from "./FetchApi";



const AuthContext = createContext();

export const AuthProvider = ({
  children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (error) setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
      userApi
      .getCurrentUser()
      .then((newUser) => setUser(newUser))
      .catch((_error) => {})
      .finally(() => setLoadingInitial(false));
  }, []);

  function login(data) {
    setLoading(true);

    return userApi
      .login(data)
      .then((newUser) => {
        setUser(newUser);
        if(newUser.role === "Admin") {
          navigate("/admin");
        } else {
          navigate("/checkout", {replace:true});
        }
      })
      .catch(() => setError("Email and Password does not match!"))
      .finally(() => setLoading(false));
  }

  function signUp(data) {
    setLoading(true);

    return userApi
      .signUp(data)
      .then((newUser) => {
        setUser(newUser);
        navigate("/login");
      })
      .catch(() => setError("This email already exists!"))
      .finally(() => setLoading(false));
  }

  function logout() {
    return userApi.logout().then(() => setUser(undefined));
  }


  // Make the provider update only when it should
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signUp,
      logout,
      setUser
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
