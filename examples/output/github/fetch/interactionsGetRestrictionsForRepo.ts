export interface InteractionsGetRestrictionsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface InteractionsGetRestrictionsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsGetRestrictionsForRepoPathParams {}

export async function interactionsGetRestrictionsForRepo(
	props: InteractionsGetRestrictionsForRepoProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/interaction-limits`, {
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
