import react from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>
      Total Price : <strong> &#8377;{props.totalPrice.toFixed(2)} </strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => {
          props.ingredientRemoved(ctrl.type);
        }}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <button
      disabled={props.totalPrice == 0}
      onClick={props.ordered}
      className="OrderButton"
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
