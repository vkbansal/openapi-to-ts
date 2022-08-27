export interface OrgsListFailedInvitationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListFailedInvitationsPathParams {
	org: string;
}

export interface OrgsListFailedInvitationsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListFailedInvitationsPathParams {
	queryParams: OrgsListFailedInvitationsQueryParams;
}

export async function orgsListFailedInvitations(props: OrgsListFailedInvitationsProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/failed_invitations`, {
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
