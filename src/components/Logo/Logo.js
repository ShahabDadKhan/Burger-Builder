import burgerLogo from "../../assets/images/27.1 burger-logo.png.png";
import "./Logo.css";

const logo = (props) => (
  <div className="Logo" style={{ height: props.height }}>
    <img src={burgerLogo} alt="burgerlogo" />
  </div>
);

export default logo;
