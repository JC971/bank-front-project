export interface AuthState {
	token: string | null;
	isLoading: boolean;
	error: AuthError | null;
}

export interface AuthError {
	code: string;
	message: string;
}
