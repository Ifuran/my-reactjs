import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./Features/CounterFeatures/reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  counter: counterReducer,
});

const composeExhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeExhancers(applyMiddleware(thunk)));

export default store;
