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

export default Navigation