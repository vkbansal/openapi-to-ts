export interface TeamsCreateDiscussionLegacyPathParams {
	team_id: number;
}

export interface TeamsCreateDiscussionLegacyRequestBody {
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

export interface TeamsCreateDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCreateDiscussionLegacyPathParams {
	body: TeamsCreateDiscussionLegacyRequestBody;
}

export async function teamsCreateDiscussionLegacy(props: TeamsCreateDiscussionLegacyProps) {
	const { team_id, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions`, {
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
