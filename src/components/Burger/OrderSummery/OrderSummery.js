import react from "react";
import Aux from "../../../hoc/aux";

const orderSummery = (props) => {
  const ingredientSummery = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey} : {props.ingredients[igKey]}{" "}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredient</p>
      <ul>{ingredientSummery}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummery;
