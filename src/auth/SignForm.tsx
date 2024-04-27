/*import React, { useState } from "react";
import { useDispatch} from "./hooks";
import { signIn } from "./authentSlice";


function SignForm() {
	const dispatch=useDispatch()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Signing in:", email, password);
		
		dispatch(signIn({email, password}))
	};
	
	
	return (
		
		<form onSubmit={handleSubmit}>
		<div className="input-wrapper">
		<label htmlFor="username">Username</label>
		<input
		type="text"
		id="username"
		value={email}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
			setEmail(e.target.value)
		}
		required
		/>
		</div>
		<div className="input-wrapper">
		<label htmlFor="password">Password</label>
		<input
		type="password"
		id="password"
		value={password}
		onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
			setPassword(e.target.value)
		}
		required
		/>
		</div>
		<div className="input-remember">
		<input type="checkbox" id="remember-me" />
		<label htmlFor="remember-me">Remember me</label>
		</div>
		<button className="sign-in-button" type="submit">
		Sign In
		</button>
		</form>
		
	);
}

export default SignForm;

*/
import { useState } from "react";
import { useDispatch } from "../hooks";
import { signIn } from "../authentSlice";
import { useNavigate } from "react-router-dom";

function SignForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("les infos:", email, password);

		// Dispatch the signIn action and wait for it to complete
		try {
			const actionResult = await dispatch(signIn({ email, password }));
			// Check if signIn was successful before navigating
			if (signIn.fulfilled.match(actionResult)) {
				navigate("/user"); // Navigate to user page on success
			} else {
				console.error("Failed to sign in");
			}
		} catch (error) {
			console.error("Sign in error:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<div className="input-remember">
				<input type="checkbox" id="remember-me" />
				<label htmlFor="remember-me">Remember me</label>
			</div>
			<button className="sign-in-button" type="submit">
				Sign In
			</button>
		</form>
	);
}

export default SignForm;
