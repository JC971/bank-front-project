import React, { useState } from "react";
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
