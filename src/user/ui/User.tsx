import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchProfile } from "../usecases/fetch-profile";
import { updateProfile } from "../usecases/update-profile";

import "./user.css";

export default function User() {
	const dispatch = useAppDispatch();
	const { firstName, lastName, isLoading, error } = useSelector(
		(state: RootState) => state.user
	);

	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token) {
			dispatch(fetchProfile());
		}
	}, [token, dispatch]);

	const [newFirstName, setNewFirstName] = useState(firstName || "");
	const [newLastName, setNewLastName] = useState(lastName || "");
	const [editButton, setEditButton] = useState(false);

	const editNameButton = (e) => {
		e.preventDefault();
		setEditButton((current) => !current);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const resultAction = await dispatch(
				updateProfile({ firstName: newFirstName, lastName: newLastName })
			);
			//
			if (updateProfile.fulfilled.match(resultAction)) {
				setEditButton(false);
			} else {
				throw new Error("Failed");
			}
		} catch (error) {
			console.log("bad day");
		}
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>Welcome back</h1>{" "}
				<form onSubmit={submitHandler} className="profile-form">
					<div className="pro-form">
						{editButton ? (
							<>
								<input
									type="text"
									value={newFirstName}
									onChange={(e) => setNewFirstName(e.target.value)}
									placeholder="votre prénom"
									className="input-first-name"
								/>
								<input
									type="text"
									value={newLastName}
									onChange={(e) => setNewLastName(e.target.value)}
									placeholder="votre nom"
									className="input-last-name"
								/>
							</>
						) : (
							<>
								<span className="name">
									<span>{firstName}</span>
								</span>
								<span className="surname">
									<span>{lastName}</span>
								</span>
							</>
						)}
					</div>
					<div>
						{editButton ? (
							<>
								<button onClick={editNameButton} className="cancel-button">
									Annuler
								</button>

								<button type="submit" className="save-button">
									Save
								</button>
							</>
						) : (
							<button onClick={editNameButton} className="name-change">
								Edit Name
							</button>
						)}
					</div>
				</form>
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
