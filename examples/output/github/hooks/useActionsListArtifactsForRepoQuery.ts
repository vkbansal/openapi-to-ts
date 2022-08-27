import { useQuery } from '@tanstack/react-query';

export interface ActionsListArtifactsForRepoPathParams {
	owner: string;
	repo: string;
}

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

export interface UseActionsListArtifactsForRepoQueryProps
	extends ActionsListArtifactsForRepoPathParams {
	queryParams: ActionsListArtifactsForRepoQueryParams;
}

export function useActionsListArtifactsForRepoQuery(
	props: UseActionsListArtifactsForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['actions/list-artifacts-for-repo', owner, repo, queryParams]);
}
