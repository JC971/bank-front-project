import logo from "../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../user/slices/userSlice";

function Navigation() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logoutUser());
		localStorage.removeItem("token");
		navigate("/");
	};

	const token = localStorage.getItem("token");

	return (
		<div>
			<nav className="main-nav">
				<Link to="/" className="main-nav-logo">
					<img src={logo} alt="Argent Bank logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				<div>
					{token ? (
						<button onClick={handleLogout} className="main-nav-item">
							<i className="fa fa-sign-out"></i>
						</button>
					) : (
						<Link to="/signin" className="main-nav-item">
							<i className="fa fa-user-circle"></i>
							Sign in
						</Link>
					)}
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
