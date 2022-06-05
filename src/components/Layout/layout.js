import Aux from "../../hoc/aux";

import "./layout.css";

const layout = (props) => (
  <Aux>
    <div>Toolbar, SlideDrawer, Backdrop </div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
