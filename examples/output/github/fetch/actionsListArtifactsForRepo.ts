/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsListArtifactsForRepoQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}