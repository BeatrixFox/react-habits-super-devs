import HomeImg from "../../assets/img/homeImg.png";
import Button from "../../components/Button/index";
import HeaderMain from "../../components/HeaderMain";

const Home = () => {
  return (
    <div>
      <HeaderMain />
      <div>
        <figure>
          <img src={HomeImg} alt="background" />
        </figure>
      </div>

      <Button>Login</Button>
      <Button>Cadastrar</Button>
    </div>
  );
};

export default Home;
