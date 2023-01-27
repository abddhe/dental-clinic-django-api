import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/main.css";
import "../src/assets/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import {  RouterProvider } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/stores";
import { router } from "./routes/root";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
);
