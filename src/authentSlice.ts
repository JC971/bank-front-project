import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, AuthError } from "./types";

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
				return { token: data.token };
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

const initialState: AuthState = {
	token: null,
	isLoading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.token = null;
			state.error = null;
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signIn.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				if (action.payload) {
					// Check if payload is not undefined
					state.token = action.payload.token;
					state.isLoading = false;
					state.error = null;
				} else {
					// Handle case where payload is undefined
					state.isLoading = false;
					state.error = { code: "NO_DATA", message: "No data received" };
				}
			})
			.addCase(signIn.rejected, (state, action) => {
				state.error = action.payload
					? (action.payload as AuthError)
					: { code: "UNKNOWN", message: "An unknown error occurred" };
				state.isLoading = false;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

