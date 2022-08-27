export interface ProjectsListForUserQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ProjectsListForUserPathParams {
	username: string;
}

export interface ProjectsListForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListForUserPathParams {
	queryParams: ProjectsListForUserQueryParams;
}

export async function projectsListForUser(props: ProjectsListForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/projects`, {
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
