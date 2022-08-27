import { useQuery } from '@tanstack/react-query';

export interface ActionsGetAllowedActionsRepositoryPathParams {
	owner: string;
	repo: string;
}

export interface UseActionsGetAllowedActionsRepositoryQueryProps
	extends ActionsGetAllowedActionsRepositoryPathParams {}

export function useActionsGetAllowedActionsRepositoryQuery(
	props: UseActionsGetAllowedActionsRepositoryQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['actions/get-allowed-actions-repository', owner, repo]);
}
