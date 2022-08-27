export interface TeamsUpdateLegacyPathParams {
	team_id: number;
}

export interface TeamsUpdateLegacyRequestBody {
	/**
	 * The description of the team.
	 */
	description?: string;
	/**
	 * The name of the team.
	 */
	name: string;
	/**
	 * The ID of a team to set as the parent team.
	 */
	parent_team_id?: number | null;
	/**
	 * **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
	 * \* `pull` - team members can pull, but not push to or administer newly-added repositories.
	 * \* `push` - team members can pull and push, but not administer newly-added repositories.
	 * \* `admin` - team members can pull, push and administer newly-added repositories.
	 * @default "pull"
	 */
	permission?: 'admin' | 'pull' | 'push';
	/**
	 * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:
	 * **For a non-nested team:**
	 * \* `secret` - only visible to organization owners and members of this team.
	 * \* `closed` - visible to all members of this organization.
	 * **For a parent or child team:**
	 * \* `closed` - visible to all members of this organization.
	 */
	privacy?: 'closed' | 'secret';
}

export interface TeamsUpdateLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateLegacyPathParams {
	body: TeamsUpdateLegacyRequestBody;
}

export async function teamsUpdateLegacy(props: TeamsUpdateLegacyProps) {
	const { team_id, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}`, {
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
