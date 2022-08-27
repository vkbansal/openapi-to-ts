export interface ReactionsListForTeamDiscussionCommentInOrgQueryParams {
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

export interface ReactionsListForTeamDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsListForTeamDiscussionCommentInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForTeamDiscussionCommentInOrgPathParams {
	queryParams: ReactionsListForTeamDiscussionCommentInOrgQueryParams;
}

export async function reactionsListForTeamDiscussionCommentInOrg(
	props: ReactionsListForTeamDiscussionCommentInOrgProps,
) {
	const { org, team_slug, discussion_number, comment_number, queryParams, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}/reactions`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
