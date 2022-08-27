/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface InteractionsSetRestrictionsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface InteractionsSetRestrictionsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsSetRestrictionsForRepoPathParams {}

export async function interactionsSetRestrictionsForRepo(
	props: InteractionsSetRestrictionsForRepoProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/interaction-limits`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}