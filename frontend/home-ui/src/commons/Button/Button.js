import './Button.css';

const SIZES = ['--loginNavbar', '--loginPage', '--linksGenerator'];
const STYLES = ['purple'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <button
      className={`${checkButtonStyle}Button ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
