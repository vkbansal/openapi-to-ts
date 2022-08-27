export interface TeamsCreateDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
}

export interface TeamsCreateDiscussionInOrgRequestBody {
	/**
	 * The discussion post's body text.
	 */
	body: string;
	/**
	 * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
	 */
	private?: boolean;
	/**
	 * The discussion post's title.
	 */
	title: string;
}

export interface TeamsCreateDiscussionInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCreateDiscussionInOrgPathParams {
	body: TeamsCreateDiscussionInOrgRequestBody;
}

export async function teamsCreateDiscussionInOrg(props: TeamsCreateDiscussionInOrgProps) {
	const { org, team_slug, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/discussions`, {
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
