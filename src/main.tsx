import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App.tsx";

import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";

import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
);
