/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsListReposInOrgQueryParams {
	per_page?: number;
	page?: number;
}

export interface TeamsListReposInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsListReposInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListReposInOrgPathParams {
	queryParams: TeamsListReposInOrgQueryParams;
}

export async function teamsListReposInOrg(props: TeamsListReposInOrgProps) {
	const { org, team_slug, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/repos`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
