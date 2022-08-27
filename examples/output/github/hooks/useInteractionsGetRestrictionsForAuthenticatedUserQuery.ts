import { useQuery } from '@tanstack/react-query';
export interface UseInteractionsGetRestrictionsForAuthenticatedUserQueryProps {}

export function useInteractionsGetRestrictionsForAuthenticatedUserQuery(
	props: UseInteractionsGetRestrictionsForAuthenticatedUserQueryProps,
) {
	const {} = props;

	return useQuery(['interactions/get-restrictions-for-authenticated-user']);
}
