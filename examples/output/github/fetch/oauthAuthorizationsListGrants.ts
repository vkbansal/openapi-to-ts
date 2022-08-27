export interface OauthAuthorizationsListGrantsQueryParams {
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

export interface OauthAuthorizationsListGrantsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: OauthAuthorizationsListGrantsQueryParams;
}

export async function oauthAuthorizationsListGrants(props: OauthAuthorizationsListGrantsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/applications/grants`, {
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
