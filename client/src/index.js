import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

let store = createStore(todoApp, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
