import HomeImg from "../../assets/img/homeImg.png";
import Button from "../../components/Button/index";

const Home = () => {
    return (
        <div>
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
