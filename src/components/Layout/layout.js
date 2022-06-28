import Aux from "../../hoc/aux";
import Toolbar from "../Navigation/Toobar/Toolbar";

import "./layout.css";

const layout = (props) => (
  <Aux>
    <Toolbar></Toolbar>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
