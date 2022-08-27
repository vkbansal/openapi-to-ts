export interface TeamsGetDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface TeamsGetDiscussionCommentInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetDiscussionCommentInOrgPathParams {}

export async function teamsGetDiscussionCommentInOrg(props: TeamsGetDiscussionCommentInOrgProps) {
	const { org, team_slug, discussion_number, comment_number, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}`,
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
