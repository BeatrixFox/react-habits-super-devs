import Header from "./components/Header/index.jsx";
import { Routes } from "./routes/index.jsx";
import GlobalStyle from "./styles/global.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
