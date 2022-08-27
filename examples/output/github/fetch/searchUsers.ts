export interface SearchUsersQueryParams {
	q: string;
	sort?: 'followers' | 'joined' | 'repositories';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface SearchUsersProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: SearchUsersQueryParams;
}

export async function searchUsers(props: SearchUsersProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/search/users`, {
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
