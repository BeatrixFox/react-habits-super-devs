function Button({ handleClick, type, title }) {
  return (
    <>
      <button
        // className=""
        onClick={handleClick}
        type={type}
      >
        {title}
      </button>
    </>
  );
}
export default Button;
