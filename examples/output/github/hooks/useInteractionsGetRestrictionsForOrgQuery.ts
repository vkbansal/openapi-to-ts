import { useQuery } from '@tanstack/react-query';

export interface InteractionsGetRestrictionsForOrgPathParams {
	org: string;
}

export interface UseInteractionsGetRestrictionsForOrgQueryProps
	extends InteractionsGetRestrictionsForOrgPathParams {}

export function useInteractionsGetRestrictionsForOrgQuery(
	props: UseInteractionsGetRestrictionsForOrgQueryProps,
) {
	const { org } = props;

	return useQuery(['interactions/get-restrictions-for-org', org]);
}
