/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReactionsCreateForTeamDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface ReactionsCreateForTeamDiscussionCommentInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionCommentInOrgPathParams {}

export async function reactionsCreateForTeamDiscussionCommentInOrg(
	props: ReactionsCreateForTeamDiscussionCommentInOrgProps,
) {
	const { org, team_slug, discussion_number, comment_number, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}/reactions`,
		{
			method: 'POST',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
