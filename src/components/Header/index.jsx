import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { HeaderDiv, ButtonHeader, Logout } from "./style";

function Header() {
  const history = useHistory();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Deseja mesmo sair?");
    if (confirmLogout) {
      localStorage.clear();
      history.push("/");
      window.location.reload();
    }
  };

  const locate = useLocation();
  console.log(locate.pathname);

  const titleMessage = () => {
    switch (locate.pathname) {
      case "/":
        return "Hábitos SuperDev's";
      case "/habits":
        return "Meus Hábitos";
      case "/login":
        return "Login";
      case "/cadastro":
        return "Cadastro";
      case "/dashboard":
        return "Painel do SuperDev";
      case "/my_groups":
        return "Meus Grupos";
      case "/groups":
        return "Grupos";
      case "/group":
        //TODO aqui precisamos chamar o nome do grupo
        return "Grupo Selecionado";

      default:
        break;
    }
  };
  return (
    <HeaderDiv>
      <a href="/">
        <AssignmentTurnedInOutlinedIcon />
      </a>

      <ButtonHeader>
        <Link to="/dashboard/">Perfil</Link>
      </ButtonHeader>
      <ButtonHeader>
        <Link to="/habits/"> Hábitos </Link>
      </ButtonHeader>
      <ButtonHeader>
        <Link to="/groups"> Grupos </Link>
      </ButtonHeader>

      <h1>{titleMessage()}</h1>

      <Logout onClick={() => handleLogout()}>
        <LogoutOutlinedIcon />
      </Logout>
    </HeaderDiv>
  );
}
export default Header;
