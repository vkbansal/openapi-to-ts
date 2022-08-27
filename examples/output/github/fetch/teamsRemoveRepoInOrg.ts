export interface TeamsRemoveRepoInOrgPathParams {
	org: string;
	team_slug: string;
	owner: string;
	repo: string;
}

export interface TeamsRemoveRepoInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveRepoInOrgPathParams {}

export async function teamsRemoveRepoInOrg(props: TeamsRemoveRepoInOrgProps) {
	const { org, team_slug, owner, repo, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/repos/${owner}/${repo}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
