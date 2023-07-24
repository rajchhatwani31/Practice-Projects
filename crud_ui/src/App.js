import React, { useState } from "react";
import DataTable from "./Components/table";

function App() {
  const [value, setValue] = useState("");
  return (
    <div>
      <DataTable setValue={setValue} value={value} />
    </div>
  );
}

export default App;
