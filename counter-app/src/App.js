import React from "react";
import Count from "./Counterapp.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import  rootReducer from "./Reducers/counter.js";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
