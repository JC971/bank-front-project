import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserState, Account } from "../userTypes";

export const fetchAccounts = createAsyncThunk(
	"user/fetchAccounts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"http://localhost:3001/api/v1/user/accounts",
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-Type": "application/json",
					},
				}
			);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || "Failed to fetch accounts");
			}
			return data.accounts as Account[];
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);

const initialState: UserState = {
	accounts: [],
	isLoading: false,
	error: null,
	token: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		clearAccounts(state) {
			state.accounts = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAccounts.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAccounts.fulfilled, (state, action) => {
				state.accounts = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchAccounts.rejected, (state, action) => {
				state.error = action.payload as string;
				state.isLoading = false;
			});
	},
});

export const { clearAccounts } = userSlice.actions;
export default userSlice.reducer;
