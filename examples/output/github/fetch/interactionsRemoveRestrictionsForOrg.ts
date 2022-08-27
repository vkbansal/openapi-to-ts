/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}