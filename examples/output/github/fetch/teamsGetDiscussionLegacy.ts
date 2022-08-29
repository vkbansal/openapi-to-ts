/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsGetDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface TeamsGetDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetDiscussionLegacyPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/rest/reference/teams#get-a-discussion) endpoint.
 *
 * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @deprecated
 */
export async function teamsGetDiscussionLegacy(props: TeamsGetDiscussionLegacyProps) {
	const { team_id, discussion_number, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}`, {
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
