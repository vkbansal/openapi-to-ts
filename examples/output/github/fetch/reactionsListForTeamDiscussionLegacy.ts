export interface ReactionsListForTeamDiscussionLegacyQueryParams {
	content?: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReactionsListForTeamDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface ReactionsListForTeamDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForTeamDiscussionLegacyPathParams {
	queryParams: ReactionsListForTeamDiscussionLegacyQueryParams;
}

export async function reactionsListForTeamDiscussionLegacy(
	props: ReactionsListForTeamDiscussionLegacyProps,
) {
	const { team_id, discussion_number, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}/reactions`, {
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
