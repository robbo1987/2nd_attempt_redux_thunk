import React from "react";
import { render } from "react-dom";
import axios from "axios";
import store from "./store";
import { Provider, connect } from "react-redux";
import Models from "./Models";
import Brands from "./brands"


const App = connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {
      bootStrap: async () => {
        const models = (await axios.get("/api/models")).data;
        dispatch({ type: "LOAD_MODELS", models });
        const brands = (await axios.get("/api/brands")).data;
        dispatch({ type: "LOAD_BRANDS", brands });
      },
    };
  }
)(
  class App extends React.Component {
    async componentDidMount() {
      this.props.bootStrap();
    }

    render() {
      return (
        <div>
          <h1>Welcome To Robby's Store!</h1>
          <h1>Models:</h1>
          <Models />

          <h1> Brands That We Carry:</h1>
          <Brands />
          <h3>Contact Info:</h3>
          <div> Robby's Guitar Shop </div>
          <div> 314 Grand Street</div>
          <div>Jersey City, NJ </div>
        </div>
      );
    }
  }
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
