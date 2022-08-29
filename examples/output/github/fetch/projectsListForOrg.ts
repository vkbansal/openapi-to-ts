/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ProjectsListForOrgPathParams {
	org: string;
}

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

export interface ProjectsListForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsListForOrgPathParams {
	queryParams: ProjectsListForOrgQueryParams;
}

/**
 * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 */
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
