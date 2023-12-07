import "../assets/css/button.css";

function Button({
  onClick,
  className,
  noBorder,
  children,
  modalButton,
  navButton,
}) {
  const buttonClassName = `${className} ${noBorder ? "no-border" : ""} ${
    modalButton ? "modal-button" : ""
  } ${navButton ? "nav-button" : ""}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
