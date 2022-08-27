/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReactionsCreateForTeamDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface ReactionsCreateForTeamDiscussionInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForTeamDiscussionInOrgPathParams {}

export async function reactionsCreateForTeamDiscussionInOrg(
	props: ReactionsCreateForTeamDiscussionInOrgProps,
) {
	const { org, team_slug, discussion_number, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/reactions`,
		{
			method: 'POST',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
