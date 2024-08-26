import logo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";

function Navigation() {
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
			</div>
		);
}
// afficher log out 
export default Navigation

/*const handleLogout = () => {
		dispatch(logoutUser());
		localStorage.removeItem('token');
	navigate('/')
		console.log("aie");
	}*/


	/*<button onClick={handleLogout} className="logout-button">
					<i className="fa fa-sign-out"></i>
				</button> */