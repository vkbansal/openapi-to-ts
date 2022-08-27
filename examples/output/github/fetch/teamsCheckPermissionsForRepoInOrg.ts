export interface TeamsCheckPermissionsForRepoInOrgPathParams {
	org: string;
	team_slug: string;
	owner: string;
	repo: string;
}

export interface TeamsCheckPermissionsForRepoInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCheckPermissionsForRepoInOrgPathParams {}

export async function teamsCheckPermissionsForRepoInOrg(
	props: TeamsCheckPermissionsForRepoInOrgProps,
) {
	const { org, team_slug, owner, repo, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/repos/${owner}/${repo}`, {
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
