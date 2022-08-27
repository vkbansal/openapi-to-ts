export interface OauthAuthorizationsListAuthorizationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	client_id?: string;
}

export interface OauthAuthorizationsListAuthorizationsProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: OauthAuthorizationsListAuthorizationsQueryParams;
}

export async function oauthAuthorizationsListAuthorizations(
	props: OauthAuthorizationsListAuthorizationsProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/authorizations`, {
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
