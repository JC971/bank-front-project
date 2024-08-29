import { Routes, Route } from "react-router-dom";
import Navigation from "./Nav";
import HomePage from "../HomePage";
import SignIn from "../auth/ui/SignIn.component";
import User from "../user/ui/User";
import Footer from "./Footer";

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
