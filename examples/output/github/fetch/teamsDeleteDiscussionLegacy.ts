export interface TeamsDeleteDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface TeamsDeleteDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsDeleteDiscussionLegacyPathParams {}

export async function teamsDeleteDiscussionLegacy(props: TeamsDeleteDiscussionLegacyProps) {
	const { team_id, discussion_number, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}`, {
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
