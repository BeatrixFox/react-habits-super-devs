import Button from "../../components/Button/index";
import { Link, Redirect } from "react-router-dom";
import { Section, Div } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import backgroundHome from "../../assets/img/homeImg.png";

const Home = () => {
  const { authorized } = useContext(UserContext);

  if (authorized) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Section>
      <div className="imgBox">
        <img src={backgroundHome} alt="" />
      </div>

      <Div>
        <div className="login">
          <Link to="/login">
            <Button type={"click"} title={"Login"}></Button>
          </Link>
        </div>

        <div className="signup">
          <Link to="/signup">
            <Button type={"click"} title={"Cadastrar"}></Button>
          </Link>
        </div>
      </Div>
    </Section>
  );
};

export default Home;
