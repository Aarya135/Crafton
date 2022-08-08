import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Components/App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


