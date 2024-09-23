import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../userTypes";
import { updateProfile } from "../usecases/update-profile";
import { fetchProfile } from "../usecases/fetch-profile";

const initialState: UserState = {
	isLoading: false,
	error: null,
	firstName: "",
	lastName: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		logoutUser(state) {
			state.firstName = "";
			state.lastName = "";
			state.error = null;
			state.isLoading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfile.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchProfile.fulfilled, (state, action) => {
				//firs last name
				state.isLoading = false;
				state.firstName = action.payload.firstName;
				state.lastName = action.payload.lastName;
			})
			.addCase(fetchProfile.rejected, (state, action) => {
				state.error = action.payload as string;
				state.isLoading = false;
			})
			.addCase(updateProfile.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				state.isLoading = false;
				state.firstName = action.payload.firstName;
				state.lastName = action.payload.lastName;
				state.error = null;
			})
			.addCase(updateProfile.rejected, (state, action) => {
				state.error = action.payload as string;
				state.isLoading = false;
			});
	},
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
