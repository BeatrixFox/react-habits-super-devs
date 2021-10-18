import HomeImg from "../../assets/img/homeImg.png";
import Button from "../../components/Button/index";
import { Link, Redirect } from "react-router-dom";
import { Section, Img, Div } from "./styles";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";

const Home = () => {
  const { authorized } = useContext(UserHabitsApiContext);

  if (authorized) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Section>      
      <div>
        <figure>
          <Img src={HomeImg} alt="background" />
        </figure>
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
