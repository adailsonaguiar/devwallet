import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import App from "./App";

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Gasolina",
          type: "withdraw",
          amount: 50,
          createdAt: new Date("2022-02-12 09:30:00"),
          category: "Veículos",
        },
        {
          id: 2,
          title: "Freelance Web",
          type: "deposit",
          amount: 500,
          createdAt: new Date("2022-02-13 09:30:00"),
          category: "Jobs",
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transactions", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
