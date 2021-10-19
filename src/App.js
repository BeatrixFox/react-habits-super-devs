import Header from "./components/Header/index.jsx";
import { Routes } from "./routes/index.jsx";
import GlobalStyle from "./styles/global.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Header />
      <Routes />
    </>
  );
}

export default App;
