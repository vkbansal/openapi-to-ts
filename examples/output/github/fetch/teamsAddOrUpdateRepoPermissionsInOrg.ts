/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsAddOrUpdateRepoPermissionsInOrgPathParams {
	org: string;
	team_slug: string;
	owner: string;
	repo: string;
}

export interface TeamsAddOrUpdateRepoPermissionsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddOrUpdateRepoPermissionsInOrgPathParams {}

export async function teamsAddOrUpdateRepoPermissionsInOrg(
	props: TeamsAddOrUpdateRepoPermissionsInOrgProps,
) {
	const { org, team_slug, owner, repo, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/repos/${owner}/${repo}`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
