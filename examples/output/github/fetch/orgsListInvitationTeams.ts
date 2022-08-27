export interface OrgsListInvitationTeamsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListInvitationTeamsPathParams {
	org: string;
	invitation_id: number;
}

export interface OrgsListInvitationTeamsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListInvitationTeamsPathParams {
	queryParams: OrgsListInvitationTeamsQueryParams;
}

export async function orgsListInvitationTeams(props: OrgsListInvitationTeamsProps) {
	const { org, invitation_id, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/invitations/${invitation_id}/teams`, {
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
