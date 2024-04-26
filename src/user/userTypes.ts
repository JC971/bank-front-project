
export interface Account {
	id: string;
	title: string;
	amount: string;
	description: string;
}

export interface UserState {
	accounts: Account[];
	isLoading: boolean;
	error: string | null;
}
