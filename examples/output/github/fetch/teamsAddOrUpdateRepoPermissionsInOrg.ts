export interface TeamsAddOrUpdateRepoPermissionsInOrgPathParams {
	org: string;
	team_slug: string;
	owner: string;
	repo: string;
}

export interface TeamsAddOrUpdateRepoPermissionsInOrgRequestBody {
	/**
	 * The permission to grant the team on this repository. Can be one of:
	 * \* `pull` - team members can pull, but not push to or administer this repository.
	 * \* `push` - team members can pull and push, but not administer this repository.
	 * \* `admin` - team members can pull, push and administer this repository.
	 * \* `maintain` - team members can manage the repository without access to sensitive or destructive actions. Recommended for project managers. Only applies to repositories owned by organizations.
	 * \* `triage` - team members can proactively manage issues and pull requests without write access. Recommended for contributors who triage a repository. Only applies to repositories owned by organizations.
	 *
	 * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
	 */
	permission?: 'admin' | 'maintain' | 'pull' | 'push' | 'triage';
}

export interface TeamsAddOrUpdateRepoPermissionsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddOrUpdateRepoPermissionsInOrgPathParams {
	body: TeamsAddOrUpdateRepoPermissionsInOrgRequestBody;
}

export async function teamsAddOrUpdateRepoPermissionsInOrg(
	props: TeamsAddOrUpdateRepoPermissionsInOrgProps,
) {
	const { org, team_slug, owner, repo, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/repos/${owner}/${repo}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
