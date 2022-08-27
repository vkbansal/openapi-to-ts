/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface InteractionsSetRestrictionsForOrgPathParams {
	org: string;
}

export interface InteractionsSetRestrictionsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsSetRestrictionsForOrgPathParams {}

export async function interactionsSetRestrictionsForOrg(
	props: InteractionsSetRestrictionsForOrgProps,
) {
	const { org, ...rest } = props;

	const response = await fetch(`/orgs/${org}/interaction-limits`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}