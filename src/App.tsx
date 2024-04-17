// src/App.js

import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import SignIn from "./SignIn"; 

function App() {
	return (
		
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/SignIn" element={<SignIn />} />
				
			</Routes>
		
	);
}

export default App;
