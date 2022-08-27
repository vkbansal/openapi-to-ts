export interface InteractionsRemoveRestrictionsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface InteractionsRemoveRestrictionsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsRemoveRestrictionsForRepoPathParams {}

export async function interactionsRemoveRestrictionsForRepo(
	props: InteractionsRemoveRestrictionsForRepoProps,
) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/interaction-limits`, {
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
