// src/App.js

import { Routes, Route } from "react-router-dom";
import Navigation from "./Component/Nav";
import HomePage from "./HomePage";
import SignIn from "./SignIn";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/SignIn" element={<SignIn />} />
			</Routes>
		</>
	);
}

export default App;
