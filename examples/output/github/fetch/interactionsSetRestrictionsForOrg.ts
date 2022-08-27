export interface InteractionsSetRestrictionsForOrgPathParams {
	org: string;
}

export type InteractionsSetRestrictionsForOrgRequestBody = InteractionLimit;

export interface InteractionsSetRestrictionsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsSetRestrictionsForOrgPathParams {
	body: InteractionsSetRestrictionsForOrgRequestBody;
}

export async function interactionsSetRestrictionsForOrg(
	props: InteractionsSetRestrictionsForOrgProps,
) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/interaction-limits`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
