import { ActionButton } from './styles';

function Button({ handleClick, type, title }) {
  return (
    <>
      <ActionButton
        // className="btn-grad"
        onClick={handleClick}
        type={type}
      >
        {title}
      </ActionButton>
    </>
  );
}
export default Button;
