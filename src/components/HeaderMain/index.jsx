import { HeaderDiv } from "./styles";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

function HeaderMain() {
  return (
    <HeaderDiv>
      <a href="/">
        <AssignmentTurnedInOutlinedIcon />
      </a>
      <h1>Hábitos SuperDev's</h1>
    </HeaderDiv>
  );
}
export default HeaderMain;
