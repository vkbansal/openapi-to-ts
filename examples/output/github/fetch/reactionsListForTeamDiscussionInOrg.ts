export interface ReactionsListForTeamDiscussionInOrgQueryParams {
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

export interface ReactionsListForTeamDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface ReactionsListForTeamDiscussionInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForTeamDiscussionInOrgPathParams {
	queryParams: ReactionsListForTeamDiscussionInOrgQueryParams;
}

export async function reactionsListForTeamDiscussionInOrg(
	props: ReactionsListForTeamDiscussionInOrgProps,
) {
	const { org, team_slug, discussion_number, queryParams, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/reactions`,
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
