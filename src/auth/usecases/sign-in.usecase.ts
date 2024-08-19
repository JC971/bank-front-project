import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = createAsyncThunk(
	"auth/signIn",
	async (
		{ email, password }: { email: string; password: string },
		thunkAPI
	) => {
		try {
			const response = await fetch("http://localhost:3001/api/v1/user/login", {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ email, password }),
			});
			const data = await response.json();
			if (response.ok) {
				localStorage.setItem("token", data.body.token);
				return { token: data.body.token };
			} else {
				return thunkAPI.rejectWithValue(data.error);
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				return thunkAPI.rejectWithValue({
					code: "NETWORK-ERROR",
					message: error.message,
				});
			} else {
				// Handle non-Error objects thrown
				return thunkAPI.rejectWithValue({
					code: "UNKNOWN-ERROR",
					message: "An unknown error occurred",
				});
			}
		}
	}
);
