import { React, Component } from "react";
import Aux from "../../hoc/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 1,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    console.log("Type we recieved is ", type);
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
  };

  removeIngredientHandler = (type) => {
    console.log("removed type is", type);
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredient,
    });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        {/* <div>Build Controls</div> */}
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;