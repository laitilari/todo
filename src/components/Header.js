import "../styling/Header.css";

const Header = ({ text, icon }) => {
  return (
    <div className="header">
      <h1>{text}</h1>
      <img src={icon} alt="header icon" className="header__icon" />
    </div>
  );
};

export default Header;
