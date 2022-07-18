import react, { Component } from "react";
import Aux from "../../../hoc/AUX/aux";
import Button from "../../UI/Button/Button";

class OrderSummery extends Component {
  componentDidUpdate() {
    console.log("Hogya update");
  }

  render() {
    const ingredientSummery = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>
              {igKey} : {this.props.ingredients[igKey]}{" "}
            </span>
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredient</p>
        <ul>{ingredientSummery}</ul>
        <h2>
          Your Total Price is{" "}
          <strong> &#8377;{this.props.price.toFixed(2)}</strong>
        </h2>
        <p>Continue to checkout?</p>
        <Button btnType="Success" clicked={this.props.continue}>
          Ronaldo
        </Button>
        <Button btnType="Danger" clicked={this.props.order}>
          Messi
        </Button>
      </Aux>
    );
  }
}

export default OrderSummery;
