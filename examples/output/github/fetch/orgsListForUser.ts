/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface OrgsListForUserQueryParams {
	per_page?: number;
	page?: number;
}

export interface OrgsListForUserPathParams {
	username: string;
}

export interface OrgsListForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListForUserPathParams {
	queryParams: OrgsListForUserQueryParams;
}

export async function orgsListForUser(props: OrgsListForUserProps) {
	const { username, queryParams, ...rest } = props;

	const response = await fetch(`/users/${username}/orgs`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}