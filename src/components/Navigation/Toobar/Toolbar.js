import Logo from "../../Logo/Logo";
import "./Toobar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className="Toolbar">
    <div>MENU</div>
    <Logo />
    <NavigationItems />
    {/* <navigationItems></navigationItems> */}
    {/* <nav>...</nav> */}
  </header>
);

export default toolbar;
