/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseInteractionsGetRestrictionsForAuthenticatedUserQueryProps {}

/**
 * Shows which type of GitHub user can interact with your public repositories and when the restriction expires. If there are no restrictions, you will see an empty response.
 */

export function useInteractionsGetRestrictionsForAuthenticatedUserQuery(
	props: UseInteractionsGetRestrictionsForAuthenticatedUserQueryProps,
) {
	const {} = props;

	return useQuery(['interactions/get-restrictions-for-authenticated-user']);
}
