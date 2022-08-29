/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsListChildInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListChildInOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListChildInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListChildInOrgPathParams {
	queryParams: TeamsListChildInOrgQueryParams;
}

/**
 * Lists the child teams of the team specified by `{team_slug}`.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
 */
export async function teamsListChildInOrg(props: TeamsListChildInOrgProps) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/teams`, {
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
