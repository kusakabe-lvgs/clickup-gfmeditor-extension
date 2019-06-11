import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <div>
      Hello world.
    </div>
  </Provider>,
  document.querySelector(".app")
);
