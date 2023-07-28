import React, { useState } from "react";
import DataTable from "./Components/table";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from "./Components/Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))


function App() {
  const [value, setValue] = useState("");
  return (
    <Provider store={store}>
      <DataTable setValue={setValue} value={value} />
    </Provider>
  );
}

export default App;


