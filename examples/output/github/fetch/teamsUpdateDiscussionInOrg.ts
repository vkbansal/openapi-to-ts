export interface TeamsUpdateDiscussionInOrgPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
}

export interface TeamsUpdateDiscussionInOrgRequestBody {
	/**
	 * The discussion post's body text.
	 */
	body?: string;
	/**
	 * The discussion post's title.
	 */
	title?: string;
}

export interface TeamsUpdateDiscussionInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsUpdateDiscussionInOrgPathParams {
	body: TeamsUpdateDiscussionInOrgRequestBody;
}

export async function teamsUpdateDiscussionInOrg(props: TeamsUpdateDiscussionInOrgProps) {
	const { org, team_slug, discussion_number, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
