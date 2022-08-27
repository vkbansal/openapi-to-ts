export interface TeamsDeleteDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface TeamsDeleteDiscussionInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsDeleteDiscussionInOrgPathParams {}

export async function teamsDeleteDiscussionInOrg(props: TeamsDeleteDiscussionInOrgProps) {
	const { org, team_slug, discussion_number, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
