import { React, Component } from "react";
import Aux from "../../hoc/AUX/aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

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
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false 
  };

  purchasingHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  purchasContinueHandler = () => {
    this.setState({loading:true})
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
    axios.post("/orders..", postOrder).then((res) => {
      console.log("res", res)
      this.setState({loading:false, purchasing:false})
    }).catch((error) => {
      this.setState({loading:false, purchasing:false})
      console.log("error", error);
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

  modalClosedHandler=()=>{
    this.setState({purchasing: false})
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummery = <OrderSummery
    price={this.state.totalPrice}
    order={this.purchasingHandler}
    continue={this.purchasContinueHandler}
    ingredients={this.state.ingredients}
  />
  if(this.state.loading) {
    orderSummery = <Spinner />
  }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.modalClosedHandler}>
          {orderSummery}
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

export default withErrorHandler(BurgerBuilder,axios);
