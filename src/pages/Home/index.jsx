import HomeImg from "../../assets/img/homeImg.png";
import Button from "../../components/Button/index";
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
};

export default Home;
