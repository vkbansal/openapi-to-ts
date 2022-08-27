export interface InteractionsSetRestrictionsForRepoPathParams {
	owner: string;
	repo: string;
}

export type InteractionsSetRestrictionsForRepoRequestBody = InteractionLimit;

export interface InteractionsSetRestrictionsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsSetRestrictionsForRepoPathParams {
	body: InteractionsSetRestrictionsForRepoRequestBody;
}

export async function interactionsSetRestrictionsForRepo(
	props: InteractionsSetRestrictionsForRepoProps,
) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/interaction-limits`, {
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
