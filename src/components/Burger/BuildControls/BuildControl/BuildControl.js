import react from "react";

import "./BuildControl.css";

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button disabled={props.disabled} className="Less" onClick={props.removed}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
