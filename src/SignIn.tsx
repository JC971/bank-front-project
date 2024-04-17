import logo from "./assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";

function signIn() {
	return (
		<div>
			<nav className="main-nav">
				<Link to="/" className="main-nav-logo">
					<img src={logo} alt="Argent Bank logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				<div>
					<Link to="/signin" className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						Sign in
					</Link>
				</div>
			</nav>
			<main className="main bg-dark">
				<section className="sign-in-content"></section>
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form action="get">
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					
				</form>
			</main>
		</div>
	);
}

export default signIn;
