export interface ActionsListSelfHostedRunnersForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListSelfHostedRunnersForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListSelfHostedRunnersForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListSelfHostedRunnersForRepoPathParams {
	queryParams: ActionsListSelfHostedRunnersForRepoQueryParams;
}

export async function actionsListSelfHostedRunnersForRepo(
	props: ActionsListSelfHostedRunnersForRepoProps,
) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/runners`, {
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
