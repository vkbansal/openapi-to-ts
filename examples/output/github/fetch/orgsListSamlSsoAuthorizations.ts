export interface OrgsListSamlSsoAuthorizationsPathParams {
	org: string;
}

export interface OrgsListSamlSsoAuthorizationsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListSamlSsoAuthorizationsPathParams {}

export async function orgsListSamlSsoAuthorizations(props: OrgsListSamlSsoAuthorizationsProps) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/credential-authorizations`, {
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
