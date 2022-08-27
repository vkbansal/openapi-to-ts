export interface InteractionsRemoveRestrictionsForOrgPathParams {
	org: string;
}

export interface InteractionsRemoveRestrictionsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsRemoveRestrictionsForOrgPathParams {}

export async function interactionsRemoveRestrictionsForOrg(
	props: InteractionsRemoveRestrictionsForOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/interaction-limits`, {
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
