/*import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

*/
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;