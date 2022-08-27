export interface ActionsListArtifactsForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListArtifactsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListArtifactsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListArtifactsForRepoPathParams {
	queryParams: ActionsListArtifactsForRepoQueryParams;
}

export async function actionsListArtifactsForRepo(props: ActionsListArtifactsForRepoProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/actions/artifacts`, {
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
