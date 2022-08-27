import { useQuery } from '@tanstack/react-query';

export interface ActionsGetPendingDeploymentsForRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface UseActionsGetPendingDeploymentsForRunQueryProps
	extends ActionsGetPendingDeploymentsForRunPathParams {}

export function useActionsGetPendingDeploymentsForRunQuery(
	props: UseActionsGetPendingDeploymentsForRunQueryProps,
) {
	const { owner, repo, run_id } = props;

	return useQuery(['actions/get-pending-deployments-for-run', owner, repo, run_id]);
}
