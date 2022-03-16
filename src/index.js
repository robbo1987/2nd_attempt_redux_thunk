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
    const models = await axios.get("/api/models");
    const modelsResponse = models.data;
    this.setState({
      models: modelsResponse,
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome To Robby's Store!</h1>
        <h1>Models:</h1>
        <ul>
          {this.state.models.map((model) => {
            return (
              <li key={model.id}>
                {model.brand.name} {model.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
render(<App />, document.querySelector("#root"));
