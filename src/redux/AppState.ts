export interface AppState {
	auth: {
		token: string;
		isLoading: boolean;
		error: null | string;
	};
}