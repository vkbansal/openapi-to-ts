import { useQuery } from '@tanstack/react-query';

export interface ActionsListSelfHostedRunnersForRepoPathParams {
	owner: string;
	repo: string;
}

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

export interface UseActionsListSelfHostedRunnersForRepoQueryProps
	extends ActionsListSelfHostedRunnersForRepoPathParams {
	queryParams: ActionsListSelfHostedRunnersForRepoQueryParams;
}

export function useActionsListSelfHostedRunnersForRepoQuery(
	props: UseActionsListSelfHostedRunnersForRepoQueryProps,
) {
	const { owner, repo, queryParams } = props;

	return useQuery(['actions/list-self-hosted-runners-for-repo', owner, repo, queryParams]);
}
