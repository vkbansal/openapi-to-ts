/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody {
	/**
	 * The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
	 */
	groups: Array<{
		/**
		 * Description of the IdP group.
		 */
		group_description: string;
		/**
		 * ID of the IdP group.
		 */
		group_id: string;
		/**
		 * Name of the IdP group.
		 */
		group_name: string;
	}>;
}

export interface TeamsCreateOrUpdateIdpGroupConnectionsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams {
	body: TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody;
}

/**
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
 */
export async function teamsCreateOrUpdateIdpGroupConnectionsInOrg(
	props: TeamsCreateOrUpdateIdpGroupConnectionsInOrgProps,
) {
	const { org, team_slug, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/team-sync/group-mappings`, {
		method: 'PATCH',
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
