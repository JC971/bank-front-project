import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
	"user/updateProfile",
	async (
		userData: { firstName: string; lastName: string },
		{ rejectWithValue }
	) => {
		try {
			const response = await fetch(
				"http://localhost:3001/api/v1/user/profile",
				{
					method: "PUT", //changement avec PUT
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						firstName: userData.firstName,
						lastName: userData.lastName,
					}),
				}
			);
			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message || "Failed to update profile");
			}
			return data.body;
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);
