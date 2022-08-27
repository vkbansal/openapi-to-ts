export interface UsersListEmailsForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListEmailsForAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListEmailsForAuthenticatedQueryParams;
}

export async function usersListEmailsForAuthenticated(props: UsersListEmailsForAuthenticatedProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/emails`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
