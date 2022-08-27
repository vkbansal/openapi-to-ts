export interface TeamsUpdateInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsUpdateInOrgRequestBody {
	/**
	 * The description of the team.
	 */
	description?: string;
	/**
	 * The name of the team.
	 */
	name?: string;
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
	 * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:
	 * **For a non-nested team:**
	 * \* `secret` - only visible to organization owners and members of this team.
	 * \* `closed` - visible to all members of this organization.
	 * **For a parent or child team:**
	 * \* `closed` - visible to all members of this organization.
	 */
	privacy?: 'closed' | 'secret';
}

export interface TeamsUpdateInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateInOrgPathParams {
	body: TeamsUpdateInOrgRequestBody;
}

export async function teamsUpdateInOrg(props: TeamsUpdateInOrgProps) {
	const { org, team_slug, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}`, {
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
