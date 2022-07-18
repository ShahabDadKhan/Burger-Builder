import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className="Toolbar">
    <div onClick={props.open}>MENU</div>
    <Logo height="60%" />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
    {/* <navigationItems></navigationItems> */}
    {/* <nav>...</nav> */}
  </header>
);

export default toolbar;
