export interface ReactionsCreateForTeamDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface ReactionsCreateForTeamDiscussionLegacyRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForTeamDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionLegacyPathParams {
	body: ReactionsCreateForTeamDiscussionLegacyRequestBody;
}

export async function reactionsCreateForTeamDiscussionLegacy(
	props: ReactionsCreateForTeamDiscussionLegacyProps,
) {
	const { team_id, discussion_number, body, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}/reactions`, {
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
