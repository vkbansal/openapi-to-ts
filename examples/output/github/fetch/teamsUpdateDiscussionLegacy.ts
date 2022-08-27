export interface TeamsUpdateDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface TeamsUpdateDiscussionLegacyRequestBody {
	/**
	 * The discussion post's body text.
	 */
	body?: string;
	/**
	 * The discussion post's title.
	 */
	title?: string;
}

export interface TeamsUpdateDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateDiscussionLegacyPathParams {
	body: TeamsUpdateDiscussionLegacyRequestBody;
}

export async function teamsUpdateDiscussionLegacy(props: TeamsUpdateDiscussionLegacyProps) {
	const { team_id, discussion_number, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}`, {
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
