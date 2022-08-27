export interface TeamsCreatePathParams {
	org: string;
}

export interface TeamsCreateRequestBody {
	/**
	 * The description of the team.
	 */
	description?: string;
	/**
	 * List GitHub IDs for organization members who will become team maintainers.
	 */
	maintainers?: string[];
	/**
	 * The name of the team.
	 */
	name: string;
	/**
	 * The ID of a team to set as the parent team.
	 */
	parent_team_id?: number;
	/**
	 * **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:
	 * \* `pull` - team members can pull, but not push to or administer newly-added repositories.
	 * \* `push` - team members can pull and push, but not administer newly-added repositories.
	 * \* `admin` - team members can pull, push and administer newly-added repositories.
	 * @default "pull"
	 */
	permission?: 'admin' | 'pull' | 'push';
	/**
	 * The level of privacy this team should have. The options are:
	 * **For a non-nested team:**
	 * \* `secret` - only visible to organization owners and members of this team.
	 * \* `closed` - visible to all members of this organization.
	 * Default: `secret`
	 * **For a parent or child team:**
	 * \* `closed` - visible to all members of this organization.
	 * Default for child team: `closed`
	 */
	privacy?: 'closed' | 'secret';
	/**
	 * The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
	 */
	repo_names?: string[];
}

export interface TeamsCreateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCreatePathParams {
	body: TeamsCreateRequestBody;
}

export async function teamsCreate(props: TeamsCreateProps) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams`, {
		method: 'POST',
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
