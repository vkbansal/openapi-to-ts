export interface InteractionsRemoveRestrictionsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function interactionsRemoveRestrictionsForAuthenticatedUser(
	props: InteractionsRemoveRestrictionsForAuthenticatedUserProps,
) {
	const { ...rest } = props;

	const response = await fetch(`/user/interaction-limits`, {
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
