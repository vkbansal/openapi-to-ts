export interface ReposListForAuthenticatedUserQueryParams {
	/**
	 * @default "all"
	 */
	visibility?: 'all' | 'private' | 'public';
	/**
	 * @default "owner,collaborator,organization_member"
	 */
	affiliation?: string;
	/**
	 * @default "all"
	 */
	type?: 'all' | 'member' | 'owner' | 'private' | 'public';
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
	since?: string;
	before?: string;
}

export interface ReposListForAuthenticatedUserProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: ReposListForAuthenticatedUserQueryParams;
}

export async function reposListForAuthenticatedUser(props: ReposListForAuthenticatedUserProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/repos`, {
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
