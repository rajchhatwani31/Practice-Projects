import React, { useState } from "react";
import DataTable from "./Components/table";
import { Provider } from "react-redux";
import rootReducer from "./Components/Reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);

function App() {
  const [value, setValue] = useState("");
  return (
    <Provider store={store}>
      <DataTable setValue={setValue} value={value} />
    </Provider>
  );
}

export default App;
