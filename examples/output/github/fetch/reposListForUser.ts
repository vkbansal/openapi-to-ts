export interface ReposListForUserQueryParams {
	/**
	 * @default "owner"
	 */
	type?: 'all' | 'member' | 'owner';
	/**
	 * @default "full_name"
	 */
	sort?: 'created' | 'full_name' | 'pushed' | 'updated';
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListForUserPathParams {
	username: string;
}

export interface ReposListForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListForUserPathParams {
	queryParams: ReposListForUserQueryParams;
}

export async function reposListForUser(props: ReposListForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/repos`, {
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
