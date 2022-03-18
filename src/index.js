import React from "react";
import { render } from "react-dom";
import store, {loadBrands,loadModels} from "./store";
import { Provider, connect } from "react-redux";
import Models from "./Models";
import Brands from "./brands";
import Nav from "./Nav"
import { HashRouter} from "react-router-dom"


const App = connect(
  (state) => {
    return state;
  },
  (dispatch) => {
    return {
      bootStrap: async () => {
        dispatch(loadBrands());
        dispatch(loadModels())
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
        <HashRouter>
        <div>
          <Nav />
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
        </HashRouter>
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
