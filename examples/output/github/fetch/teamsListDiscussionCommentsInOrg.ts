export interface TeamsListDiscussionCommentsInOrgQueryParams {
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

export interface TeamsListDiscussionCommentsInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface TeamsListDiscussionCommentsInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListDiscussionCommentsInOrgPathParams {
	queryParams: TeamsListDiscussionCommentsInOrgQueryParams;
}

export async function teamsListDiscussionCommentsInOrg(
	props: TeamsListDiscussionCommentsInOrgProps,
) {
	const { org, team_slug, discussion_number, queryParams, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments`,
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
