/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsDeleteLegacyPathParams {
	team_id: number;
}

export interface TeamsDeleteLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsDeleteLegacyPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/reference/teams#delete-a-team) endpoint.
 *
 * To delete a team, the authenticated user must be an organization owner or team maintainer.
 *
 * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
 * @deprecated
 */
export async function teamsDeleteLegacy(props: TeamsDeleteLegacyProps) {
	const { team_id, ...rest } = props;

	const response = await fetch(`/teams/${team_id}`, {
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
