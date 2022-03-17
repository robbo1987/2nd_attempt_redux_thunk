import React from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      models: [],
      brands: [],
    };
  }

  async componentDidMount() {
    const models = (await axios.get("/api/models")).data;
    const brands = (await axios.get("/api/brands")).data;

    this.setState({
      models,
      brands,
    });
  }

  render() {
    const models = this.state.models;
    const brands = this.state.brands;
    return (
      <div>
        <h1>Welcome To Robby's Store!</h1>
        <h1>Models:</h1>
        <ul>
          {models.map((model) => {
            return (
              <li key={model.id}>
                {model.brand.name} {model.name}
              </li>
            );
          })}
        </ul>

        <h1> Brands That We Carry:</h1>
        <ul>
          {brands.map((brand) => {
            return <li key={brand.id}>{brand.name}</li>;
          })}
        </ul>
        <h3>Contact Info:</h3>
        <div> Robby's Guitar Shop </div>
        <div> 314 Grand Street</div>
        <div>Jersey City, NJ </div>
      </div>
    );
  }
}
render(<App />, document.querySelector("#root"));
