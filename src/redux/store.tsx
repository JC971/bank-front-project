import { configureStore, Store, ThunkDispatch, Action } from "@reduxjs/toolkit";
import authReducer from "../auth/slices/auth.slice";
import userReducer from "../user/slices/userSlice";
import { AppState } from "./AppState";
import { useDispatch } from "react-redux";

interface dependencies {}

export const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
});

export type reduxStore = Store<AppState> & {
	dispatch: ThunkDispatch<AppState, dependencies, Action>;
};

export const useAppDispatch = () =>
	useDispatch<ThunkDispatch<AppState, dependencies, Action>>();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
