/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface InteractionsGetRestrictionsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface UseInteractionsGetRestrictionsForRepoQueryProps
	extends InteractionsGetRestrictionsForRepoPathParams {}

export function useInteractionsGetRestrictionsForRepoQuery(
	props: UseInteractionsGetRestrictionsForRepoQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['interactions/get-restrictions-for-repo', owner, repo]);
}
