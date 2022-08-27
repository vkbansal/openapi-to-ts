export interface InteractionsGetRestrictionsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function interactionsGetRestrictionsForAuthenticatedUser(
	props: InteractionsGetRestrictionsForAuthenticatedUserProps,
) {
	const { ...rest } = props;

	const response = await fetch(`/user/interaction-limits`, {
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
