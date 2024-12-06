import React, { useState } from "react";
import "./App.css";
import Useref_example from "./example-code/Useref_example";
import Page from "./example-code/useContext/Page";
import { ThemeContext } from "./context/ThemeContext";
import UseReducer_example from "./example-code/UseReducer_example";
import UseEffect_example from "./example-code/UseEffect_example";
import UseMemo_exaplme from "./example-code/UseMemo_exaplme";
import UseCallback_example from "./example-code/UseCallback_example";
import UseLayoutEffect_example from "./example-code/UseLayoutEffect_example";
import Debounce_exaplme from "./example-code/Debounce_exaplme";
import Throttle_example from "./example-code/Throttle_example";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      {/* <Useref_example /> */}
      {/* <Page isDark={isDark} setIsDark={setIsDark} /> */}
      {/* <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider> */}
      {/* <UseReducer_example /> */}
      {/* {showTimer && <UseEffect_example />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle</button> */}
      {/* <UseMemo_exaplme /> */}
      {/* <UseCallback_example /> */}
      {/* <UseLayoutEffect_example /> */}
      {/* <Debounce_exaplme /> */}
      <Throttle_example />
    </div>
  );
}

export default App;
