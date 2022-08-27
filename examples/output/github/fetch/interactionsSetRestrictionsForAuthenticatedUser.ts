export type InteractionsSetRestrictionsForAuthenticatedUserRequestBody = InteractionLimit;

export interface InteractionsSetRestrictionsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	body: InteractionsSetRestrictionsForAuthenticatedUserRequestBody;
}

export async function interactionsSetRestrictionsForAuthenticatedUser(
	props: InteractionsSetRestrictionsForAuthenticatedUserProps,
) {
	const { body, ...rest } = props;

	const response = await fetch(`/user/interaction-limits`, {
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
