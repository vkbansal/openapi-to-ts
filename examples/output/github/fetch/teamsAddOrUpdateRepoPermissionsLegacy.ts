export interface TeamsAddOrUpdateRepoPermissionsLegacyPathParams {
	team_id: number;
	owner: string;
	repo: string;
}

export interface TeamsAddOrUpdateRepoPermissionsLegacyRequestBody {
	/**
	 * The permission to grant the team on this repository. Can be one of:
	 * \* `pull` - team members can pull, but not push to or administer this repository.
	 * \* `push` - team members can pull and push, but not administer this repository.
	 * \* `admin` - team members can pull, push and administer this repository.
	 *
	 * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
	 */
	permission?: 'admin' | 'pull' | 'push';
}

export interface TeamsAddOrUpdateRepoPermissionsLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddOrUpdateRepoPermissionsLegacyPathParams {
	body: TeamsAddOrUpdateRepoPermissionsLegacyRequestBody;
}

export async function teamsAddOrUpdateRepoPermissionsLegacy(
	props: TeamsAddOrUpdateRepoPermissionsLegacyProps,
) {
	const { team_id, owner, repo, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/repos/${owner}/${repo}`, {
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
