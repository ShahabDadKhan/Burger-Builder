import react from "react";
import "./Modal.css";
import Aux from "../../../hoc/aux";
import Backdrop from "../BackDrop/BackDrop";

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;