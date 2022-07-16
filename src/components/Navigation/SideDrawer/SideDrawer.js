import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawe.css";

const sideDrawer = (props) => {
  return (
    <div className="SideDrawer">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
