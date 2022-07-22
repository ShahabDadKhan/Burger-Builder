import { React, Component } from "react";
import Aux from "../../hoc/AUX/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 7,
  meat: 20,
  bacon: 3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 45,
    purchasable: false,
    purchasing: false,
  };

  purchasingHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  purchasContinueHandler = () => {
    const postOrder = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Shahab Dad Khan",
        address: {
          street: "22 Bakers Street",
          city: "London",
          country: "United Kingdom",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios.post("/orders.json", postOrder).then((res) => {
      console.log("res", res).catch((error) => {
        console.log("error", error);
      });
    });
  };

  addIngredientHandler = (type) => {
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
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
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
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummery
            price={this.state.totalPrice}
            order={this.purchasingHandler}
            continue={this.purchasContinueHandler}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        {/* <div>Build Controls</div> */}
        <BuildControls
          totalPrice={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ordered={this.purchasingHandler}
          disabled={disabledInfo}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
