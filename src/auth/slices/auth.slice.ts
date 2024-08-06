import { createSlice } from "@reduxjs/toolkit";
import { AuthState, AuthError } from "../../types";
import { signIn } from "../usecases/sign-in.usecase";

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
				if (action.payload && action.payload.token) {
					console.log("Payload received:", action.payload);

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
