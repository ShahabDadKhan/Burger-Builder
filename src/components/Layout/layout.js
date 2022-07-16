import Aux from "../../hoc/aux";
import Toolbar from "../Navigation/Toobar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import "./layout.css";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
