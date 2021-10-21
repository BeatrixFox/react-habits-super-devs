import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { UserContext } from "../../Providers/User";
import { GroupsContext } from "../../Providers/Groups";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { HeaderDiv, ButtonHeader, Logout } from "./styles";
import { useContext } from "react";

function Header() {
  const history = useHistory();
  const { setAuthorized } = useContext(UserContext);
  const { oneGroup } = useContext(GroupsContext);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Deseja mesmo sair?");
    if (confirmLogout) {
      toast.info("Logout efetuado");
      localStorage.clear();
      setAuthorized(false);
      history.push("/");
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
      case "/signup":
        return "Cadastro";
      case "/dashboard":
        return "Painel do SuperDev";
      case "/my_groups":
        return "Meus Grupos";
      case "/groups":
        return "Grupos";
      case "/group":
        return `${oneGroup.name}`;

      default:
        break;
    }
  };
  return (
    <HeaderDiv>
      <Link to="/">
        <AssignmentTurnedInOutlinedIcon />
      </Link>
      <div>
        <ButtonHeader>
          <Link to="/dashboard">Perfil</Link>
        </ButtonHeader>
        <ButtonHeader>
          <Link to="/habits"> Hábitos </Link>
        </ButtonHeader>
        <ButtonHeader>
          <Link to="/my_groups"> Meus Grupos </Link>
        </ButtonHeader>
        <ButtonHeader>
          <Link to="/groups"> Grupos </Link>
        </ButtonHeader>
      </div>

      <h1>{titleMessage()}</h1>

      <Logout onClick={handleLogout}>
        <LogoutOutlinedIcon />
      </Logout>
    </HeaderDiv>
  );
}
export default Header;
