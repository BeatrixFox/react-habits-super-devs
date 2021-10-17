import HomeImg from "../../assets/img/homeImg.png";
import Button from "../../components/Button/index";
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
};

export default Home;
