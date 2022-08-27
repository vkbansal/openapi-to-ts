export interface TeamsListDiscussionCommentsLegacyQueryParams {
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListDiscussionCommentsLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface TeamsListDiscussionCommentsLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListDiscussionCommentsLegacyPathParams {
	queryParams: TeamsListDiscussionCommentsLegacyQueryParams;
}

export async function teamsListDiscussionCommentsLegacy(
	props: TeamsListDiscussionCommentsLegacyProps,
) {
	const { team_id, discussion_number, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}/comments`, {
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
