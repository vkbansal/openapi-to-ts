import { useQuery } from '@tanstack/react-query';

export interface ActionsListRunnerApplicationsForOrgPathParams {
	org: string;
}

export interface UseActionsListRunnerApplicationsForOrgQueryProps
	extends ActionsListRunnerApplicationsForOrgPathParams {}

export function useActionsListRunnerApplicationsForOrgQuery(
	props: UseActionsListRunnerApplicationsForOrgQueryProps,
) {
	const { org } = props;

	return useQuery(['actions/list-runner-applications-for-org', org]);
}
