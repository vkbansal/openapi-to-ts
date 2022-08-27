export interface ActionsGetOrgPublicKeyPathParams {
	org: string;
}

export interface ActionsGetOrgPublicKeyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetOrgPublicKeyPathParams {}

export async function actionsGetOrgPublicKey(props: ActionsGetOrgPublicKeyProps) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets/public-key`, {
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
