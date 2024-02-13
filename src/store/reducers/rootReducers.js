import { combineReducers } from "redux";
import taskReducer from "./Product";
import priceReducer from "./Pricing";

const rootReducer = combineReducers({
  products: taskReducer,
  price: priceReducer,
});

export default rootReducer;
