export interface TeamsGetDiscussionLegacyPathParams {
	team_id: number;
	discussion_number: number;
}

export interface TeamsGetDiscussionLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetDiscussionLegacyPathParams {}

export async function teamsGetDiscussionLegacy(props: TeamsGetDiscussionLegacyProps) {
	const { team_id, discussion_number, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/discussions/${discussion_number}`, {
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
