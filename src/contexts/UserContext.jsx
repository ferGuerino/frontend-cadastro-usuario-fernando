import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const request = await api.get("profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        const response = request.data;
        setUser(response);
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function userLogin(data) {
    try {
      setLoading(true);
      const request = await api.post("sessions", data);
      const response = request.data;
      localStorage.setItem("@TOKEN", response.token);
      localStorage.setItem("@USERID", response.user.id);
      setUser(response.user);
      navigate("/home");
    } catch (error) {
      toast.error("Email ou senha inválido");
    } finally {
      setLoading(false);
    }
  }

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  }
  return (
    <UserContext.Provider
      value={{ userLogin, user, setUser, loading, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
