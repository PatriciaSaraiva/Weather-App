import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import { AlertProvider } from "./context/alertContext/alertContext";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <AlertProvider>
        <App />
      </AlertProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();
