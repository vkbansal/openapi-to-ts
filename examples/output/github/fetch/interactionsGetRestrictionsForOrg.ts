export interface InteractionsGetRestrictionsForOrgPathParams {
	org: string;
}

export interface InteractionsGetRestrictionsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsGetRestrictionsForOrgPathParams {}

export async function interactionsGetRestrictionsForOrg(
	props: InteractionsGetRestrictionsForOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/interaction-limits`, {
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
