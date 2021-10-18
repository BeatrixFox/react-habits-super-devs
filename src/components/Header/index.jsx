import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { HeaderDiv, Link, Logout } from "./style";

function Header({ titleMessage }) {
  return (
    <HeaderDiv>
      <a href="/">
        <AssignmentTurnedInOutlinedIcon />
      </a>

      <Link> Perfil </Link>
      <Link> Hábitos </Link>
      <Link> Grupos </Link>

      <h1>{titleMessage}</h1>

      <Logout>
        <LogoutOutlinedIcon />
      </Logout>
    </HeaderDiv>
  );
}
export default Header;
