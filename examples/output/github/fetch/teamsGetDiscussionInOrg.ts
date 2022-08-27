export interface TeamsGetDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface TeamsGetDiscussionInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetDiscussionInOrgPathParams {}

export async function teamsGetDiscussionInOrg(props: TeamsGetDiscussionInOrgProps) {
	const { org, team_slug, discussion_number, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}`, {
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
