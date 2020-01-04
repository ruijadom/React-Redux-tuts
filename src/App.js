import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>React & Redux</p>
        <CakeContainer></CakeContainer>
      </div>
    </Provider>
  );
}

export default App;
