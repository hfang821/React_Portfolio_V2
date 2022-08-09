import React, { useState } from "react";
import Router from "./Router";
import Wrapper from "./components/Wrapper";

function App() {
  const[theme, setTheme] = useState(false);

  return (
    <div data-barba="container">
          <Wrapper theme={theme} />
          <Router theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
