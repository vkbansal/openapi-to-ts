export interface ReactionsCreateForTeamDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface ReactionsCreateForTeamDiscussionInOrgRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForTeamDiscussionInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionInOrgPathParams {
	body: ReactionsCreateForTeamDiscussionInOrgRequestBody;
}

export async function reactionsCreateForTeamDiscussionInOrg(
	props: ReactionsCreateForTeamDiscussionInOrgProps,
) {
	const { org, team_slug, discussion_number, body, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/reactions`,
		{
			method: 'POST',
			body: JSON.stringify(body),
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
