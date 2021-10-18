import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { HeaderDiv, ButtonHeader, Logout } from "./style";

function Header({ titleMessage }) {
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
        <Link to="/groups/"> Grupos </Link>
      </ButtonHeader>

      <h1>{titleMessage}</h1>

      <Logout>
        <LogoutOutlinedIcon />
      </Logout>
    </HeaderDiv>
  );
}
export default Header;
