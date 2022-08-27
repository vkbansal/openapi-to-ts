export interface TeamsListPendingInvitationsLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface TeamsListPendingInvitationsLegacyPathParams {
	team_id: number;
}

export interface TeamsListPendingInvitationsLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListPendingInvitationsLegacyPathParams {
	queryParams: TeamsListPendingInvitationsLegacyQueryParams;
}

export async function teamsListPendingInvitationsLegacy(
	props: TeamsListPendingInvitationsLegacyProps,
) {
	const { team_id, queryParams, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/invitations`, {
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
