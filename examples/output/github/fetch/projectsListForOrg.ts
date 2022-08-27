export interface ProjectsListForOrgQueryParams {
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

export interface ProjectsListForOrgPathParams {
	org: string;
}

export interface ProjectsListForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListForOrgPathParams {
	queryParams: ProjectsListForOrgQueryParams;
}

export async function projectsListForOrg(props: ProjectsListForOrgProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/projects`, {
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
