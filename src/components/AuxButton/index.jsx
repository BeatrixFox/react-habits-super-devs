import { Button } from "./styles";


const AuxButton = ({ handleClick, type, title }) => {


    return(
        <>
            <Button
            onClick={handleClick}
            type={type}
            title={title}
            >
            {title}
            </Button>
        </>

    )
}

export default AuxButton;