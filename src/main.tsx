import React from "react";

import { ApolloProvider } from "@apollo/client";

import ReactDOM from "react-dom/client";

import App from "./App";
import { client } from "./lib/apollo";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
