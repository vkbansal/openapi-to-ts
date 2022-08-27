export interface ReactionsDeleteForTeamDiscussionPathParams {
	org: string;
	team_slug: string;
	discussion_number: number;
	reaction_id: number;
}

export interface ReactionsDeleteForTeamDiscussionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteForTeamDiscussionPathParams {}

export async function reactionsDeleteForTeamDiscussion(
	props: ReactionsDeleteForTeamDiscussionProps,
) {
	const { org, team_slug, discussion_number, reaction_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/teams/${team_slug}/discussions/${discussion_number}/reactions/${reaction_id}`,
		{
			method: 'DELETE',
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
