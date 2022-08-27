/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface OrgsListFailedInvitationsQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
