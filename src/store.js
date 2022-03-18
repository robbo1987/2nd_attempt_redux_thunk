import { createStore, combineReducers } from "redux";
const LOAD_MODELS = "LOAD_MODELS";
const LOAD_BRANDS = "LOAD_BRANDS";

const modelReducer = (state = [], action) => {
  if(action.type === LOAD_MODELS) {
    state = action.models
  }
  return state;
};

const brandReducer = (state = [], action) => {
  if(action.type === LOAD_BRANDS) {
    state = action.brands
  }
  return state;
};

const reducer = combineReducers({
  models:modelReducer,
  brands:brandReducer,
});
const store = createStore(reducer);

export default store