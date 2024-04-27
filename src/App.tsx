// src/App.js

import { Routes, Route } from "react-router-dom";
import Navigation from "./Component/Nav";
import HomePage from "./HomePage";
import SignIn from "./auth/SignIn";
import User from "./user/user";
import Footer from "./footer";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/SignIn" element={<SignIn />} />
				<Route path="/user" element={<User />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
