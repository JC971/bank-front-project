// src/App.js

import { Routes, Route } from "react-router-dom";
import Navigation from "./Component/Nav";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import Footer from "./footer";

function App() {
	return (
		<>
		
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/SignIn" element={<SignIn />} />
			</Routes>
			<Footer />
			
		</>
	);
}

export default App;
