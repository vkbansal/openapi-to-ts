export interface TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams {
	team_id: number;
}

export interface TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody {
	/**
	 * The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
	 */
	groups: Array<{
		/**
		 * @example "\"moar cheese pleese\""
		 */
		description?: string;
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
		/**
		 * @example "\"caceab43fc9ffa20081c\""
		 */
		id?: string;
		/**
		 * @example "\"external-team-6c13e7288ef7\""
		 */
		name?: string;
	}>;
	/**
	 * @example "\"I am not a timestamp\""
	 */
	synced_at?: string;
}

export interface TeamsCreateOrUpdateIdpGroupConnectionsLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams {
	body: TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody;
}

export async function teamsCreateOrUpdateIdpGroupConnectionsLegacy(
	props: TeamsCreateOrUpdateIdpGroupConnectionsLegacyProps,
) {
	const { team_id, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/team-sync/group-mappings`, {
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
