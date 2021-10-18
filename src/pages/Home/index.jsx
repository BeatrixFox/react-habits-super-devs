import HomeImg from "../../assets/img/homeImg.png";
import Button from "../../components/Button/index";
<<<<<<< HEAD
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handlerClickGoToLogin = () => {
    history.push("/login");
  };

  const handlerClickGoToCadastrar = () => {
    history.push("/signup");
  };

  return (
    <div>
      <div>
        <figure>
          <img src={HomeImg} alt="background" />
        </figure>
      </div>

      <Button
        type={"click"}
        title={"Login"}
        handleClick={handlerClickGoToLogin}
      ></Button>
      <Button
        type={"click"}
        title={"Cadastra"}
        handleClick={handlerClickGoToCadastrar}
      ></Button>
    </div>
  );
=======
import { Link } from "react-router-dom";
import { Section, Img, Div } from "./styles";

const Home = () => {
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
                        <Button title="login"></Button>
                    </Link>
                </div>

                <div className="signup">
                    <Link to="/signup">
                        <Button title="cadastrar"></Button>
                    </Link>
                </div>
            </Div>
        </Section>
    );
>>>>>>> 58a50e764e1bf27b462d7c91353664edb4a158db
};

export default Home;
