export interface UsersListPublicEmailsForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListPublicEmailsForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListPublicEmailsForAuthenticatedQueryParams;
}

export async function usersListPublicEmailsForAuthenticated(
	props: UsersListPublicEmailsForAuthenticatedProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/public_emails`, {
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
