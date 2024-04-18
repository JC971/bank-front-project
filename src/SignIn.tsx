import SignForm from "./SignForm";



function signIn() {
	return (
		<>
			<main className="main bg-dark">
			<section className="sign-in-content"></section>
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<SignForm/>
			</main>
		</>
	);
}

export default signIn;
