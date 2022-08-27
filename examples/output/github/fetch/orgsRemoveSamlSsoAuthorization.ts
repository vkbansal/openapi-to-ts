export interface OrgsRemoveSamlSsoAuthorizationPathParams {
	org: string;
	credential_id: number;
}

export interface OrgsRemoveSamlSsoAuthorizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsRemoveSamlSsoAuthorizationPathParams {}

export async function orgsRemoveSamlSsoAuthorization(props: OrgsRemoveSamlSsoAuthorizationProps) {
	const { org, credential_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/credential-authorizations/${credential_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
