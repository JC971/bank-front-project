import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, AuthError } from "./types";

export const signIn = createAsyncThunk(
	"auth/signIn",
	async (
		{ email, password }: { email: string; password: string },
		thunkAPI
	) => {
		try {
			const response = await fetch("htpp://localhost:3001/api/v1/user/login", {
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
      if(error instanceof Error)
			return thunkAPI.rejectWithValue({
				code: "NETWORK-ERROR",
				message: error.message,
			});
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
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signIn.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.token = action.payload.token;
				state.isLoading = false;
				state.error = null;
			})
			.addCase(signIn.rejected, (state, action) => {
				state.error = action.payload as AuthError;
				state.isLoading = false;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
