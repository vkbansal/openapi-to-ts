/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface InteractionsSetRestrictionsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {}

export async function interactionsSetRestrictionsForAuthenticatedUser(
	props: InteractionsSetRestrictionsForAuthenticatedUserProps,
) {
	const { ...rest } = props;

	const response = await fetch(`/user/interaction-limits`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
