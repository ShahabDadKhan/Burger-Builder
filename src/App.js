import React, { Component } from "react";
import Layout from "./components/Layout/layout";
import BurgerBuilder from "./container/BurgerBuilde/BurgerBuilder";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
