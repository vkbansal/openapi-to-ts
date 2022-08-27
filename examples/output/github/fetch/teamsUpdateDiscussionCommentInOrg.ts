/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsUpdateDiscussionCommentInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	comment_number: number;
}

export interface TeamsUpdateDiscussionCommentInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateDiscussionCommentInOrgPathParams {}

export async function teamsUpdateDiscussionCommentInOrg(
	props: TeamsUpdateDiscussionCommentInOrgProps,
) {
	const { org, team_slug, discussion_number, comment_number, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/comments/${comment_number}`,
		{
			method: 'PATCH',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
