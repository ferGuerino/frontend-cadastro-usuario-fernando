import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./api";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesPages from "./routes";
import { DivApp } from "./styles/app";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  async function userLogin(data, setLoading) {
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

  async function userRegister(data, setLoading) {
    try {
      setLoading(true);
      await api.post("users", data);
      toast.success("Cadastro feito com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops!, Algo deu errado.");
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
    <DivApp>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RoutesPages
        setUser={setUser}
        userLogin={userLogin}
        userRegister={userRegister}
        userLogout={userLogout}
      />
    </DivApp>
  );
}

export default App;
