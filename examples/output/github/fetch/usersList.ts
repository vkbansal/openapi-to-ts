export interface UsersListQueryParams {
	since?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface UsersListProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: UsersListQueryParams;
}

export async function usersList(props: UsersListProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/users`, {
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
