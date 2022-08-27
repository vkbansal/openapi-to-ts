import { useQuery } from '@tanstack/react-query';

export interface ActionsGetAllowedActionsOrganizationPathParams {
	org: string;
}

export interface UseActionsGetAllowedActionsOrganizationQueryProps
	extends ActionsGetAllowedActionsOrganizationPathParams {}

export function useActionsGetAllowedActionsOrganizationQuery(
	props: UseActionsGetAllowedActionsOrganizationQueryProps,
) {
	const { org } = props;

	return useQuery(['actions/get-allowed-actions-organization', org]);
}
