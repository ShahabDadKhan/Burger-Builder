import react from "react";
import Aux from "../../../hoc/aux";
import Button from "../../UI/Button/Button";

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
      <h2>
        Your Total Price is <strong> &#8377;{props.price.toFixed(2)}</strong>
      </h2>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.continue}>
        Ronaldo
      </Button>
      <Button btnType="Danger" clicked={props.order}>
        Messi
      </Button>
      {/* <button onClick={props.order}>Cancel</button> */}
      {/* <button onClick={props.order}>Siiuuuuu</button> */}
    </Aux>
  );
};

export default orderSummery;
