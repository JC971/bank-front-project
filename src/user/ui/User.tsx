import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchAccounts } from "../slices/userSlice";


export default function User() {
	const dispatch = useAppDispatch();
	const { firstName, lastName, isLoading, error } = useSelector(
		(state: RootState) => state.user
	);

	
	const token = useSelector((state: RootState) => state.auth.token);
	

	useEffect(() => {
		if (token) {
			dispatch(fetchAccounts());
		}
	}, [token, dispatch]); 
	console.log("User State:", { firstName, lastName, isLoading, error });
	console.log('coucou')

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>; 
	}

	
	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}! {/*conditions input quand press button true false ! autre bouton */}
				</h1>
				<button className="edit-button">Edit Name</button>
			</div>
			
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
}
