import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfile = createAsyncThunk(
	"user/fetchProfile", 
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				"http://localhost:3001/api/v1/user/profile", //? verifier daqns swagger du back
				{
					method: "post",
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

			return data.body;
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);
