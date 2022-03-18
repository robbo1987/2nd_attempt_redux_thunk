import { createStore, combineReducers, applyMiddleware } from "redux";
const LOAD_MODELS = "LOAD_MODELS";
const LOAD_BRANDS = "LOAD_BRANDS";
import axios from "axios";
import thunk from "redux-thunk";

const modelReducer = (state = [], action) => {
  if (action.type === LOAD_MODELS) {
    state = action.models;
  }
  return state;
};

const brandReducer = (state = [], action) => {
  if (action.type === LOAD_BRANDS) {
    state = action.brands;
  }
  return state;
};

const reducer = combineReducers({
  models: modelReducer,
  brands: brandReducer,
});

export const loadBrands = () => {
  return async (dispatch) => {
    const brands = (await axios.get("/api/brands")).data;
    dispatch({ type: LOAD_BRANDS, brands });
  };
};
export const loadModels = () => {
  return async (dispatch) => {
    const models = (await axios.get("/api/models")).data;
    dispatch({ type: "LOAD_MODELS", models });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
