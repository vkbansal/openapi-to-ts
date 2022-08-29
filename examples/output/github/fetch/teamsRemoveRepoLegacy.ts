/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsRemoveRepoLegacyPathParams {
	team_id: number;
	owner: string;
	repo: string;
}

export interface TeamsRemoveRepoLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveRepoLegacyPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
 *
 * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
 * @deprecated
 */
export async function teamsRemoveRepoLegacy(props: TeamsRemoveRepoLegacyProps) {
	const { team_id, owner, repo, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/repos/${owner}/${repo}`, {
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
