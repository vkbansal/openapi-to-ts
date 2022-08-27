export interface OrgsListPendingInvitationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListPendingInvitationsPathParams {
	org: string;
}

export interface OrgsListPendingInvitationsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListPendingInvitationsPathParams {
	queryParams: OrgsListPendingInvitationsQueryParams;
}

export async function orgsListPendingInvitations(props: OrgsListPendingInvitationsProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/invitations`, {
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
