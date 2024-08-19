import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../userTypes";


export const fetchAccounts = createAsyncThunk(
	"user/fetchAccounts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"http://localhost:3001/api/v1/user/profile",//? verifier daqns swagger du back
				{
					method: "post",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-Type": "application/json",
					},
					
				}
			);
			const data = await response.json();console.log(data, 'echo')
			if (!response.ok) {
				throw new Error(data.message || "Failed to fetch accounts");
			}
			
			console.log('voila')
			return data.body
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	} 
);

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
		clearAccounts(state) {
			state.error = null;
		},
		setFirstName(state, action) {
			state.firstName = action.payload; //first name
		},
		setLastName(state, action) {
			state.lastName = action.payload; //last name
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAccounts.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAccounts.fulfilled, (state, action) => {
				//firs last name
				state.isLoading = false;
				state.firstName = action.payload.firstName; 
				state.lastName = action.payload.lastName; 
			})
			.addCase(fetchAccounts.rejected, (state, action) => {
				state.error = action.payload as string;
				state.isLoading = false;
			});
	},
});

export const { clearAccounts, setFirstName, setLastName } = userSlice.actions;

export default userSlice.reducer;
