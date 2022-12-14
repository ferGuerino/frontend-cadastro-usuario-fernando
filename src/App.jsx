import { useNavigate } from "react-router-dom";
import { api } from "./api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesPages from "./routes";
import { DivApp } from "./styles/app";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const navigate = useNavigate();

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
      <UserProvider>
        <RoutesPages userRegister={userRegister} />
      </UserProvider>
    </DivApp>
  );
}

export default App;
