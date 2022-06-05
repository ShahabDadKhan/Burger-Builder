import React from "react";

import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  console.log("Props", props);
  const transformedIngredients = Object.keys(props.ingredients).map((igkey) => {
    return [...Array(props.ingredients[igkey])].map((_, i) => {
      return <BurgerIngredient key={igkey + i} type={igkey} />;
    });
  });

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      {/* <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" /> */}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
