import { useQuery } from '@tanstack/react-query';

export interface ActionsListRepoWorkflowsPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListRepoWorkflowsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListRepoWorkflowsQueryProps extends ActionsListRepoWorkflowsPathParams {
	queryParams: ActionsListRepoWorkflowsQueryParams;
}

export function useActionsListRepoWorkflowsQuery(props: UseActionsListRepoWorkflowsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['actions/list-repo-workflows', owner, repo, queryParams]);
}
