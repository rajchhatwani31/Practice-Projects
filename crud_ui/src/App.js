import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Components/Reducers";
import createSagaMiddelware from "redux-saga";
import rootSaga from "./Components/rootSaga";
import AccessibleTable from "./Components/table";

const sagaMiddleware = createSagaMiddelware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga)

function App() {
// debugger
  return (
    <Provider store={store}>
      <AccessibleTable  />
    </Provider>
  );
}

export default App;
