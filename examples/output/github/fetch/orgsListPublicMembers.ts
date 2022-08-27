/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface OrgsListPublicMembersQueryParams {
	per_page?: number;
	page?: number;
}

export interface OrgsListPublicMembersPathParams {
	org: string;
}

export interface OrgsListPublicMembersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListPublicMembersPathParams {
	queryParams: OrgsListPublicMembersQueryParams;
}

export async function orgsListPublicMembers(props: OrgsListPublicMembersProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/public_members`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
