import SignForm from "./SignForm";

function SignIn() {
	return (
		<>
			<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
					<SignForm />
				</section>
			</main>
		</>
	);
}

export default SignIn;
