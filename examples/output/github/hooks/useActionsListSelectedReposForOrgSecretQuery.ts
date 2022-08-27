/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ActionsListSelectedReposForOrgSecretPathParams {
	org: string;
	secret_name: string;
}

export interface ActionsListSelectedReposForOrgSecretQueryParams {
	page?: number;
	per_page?: number;
}

export interface UseActionsListSelectedReposForOrgSecretQueryProps
	extends ActionsListSelectedReposForOrgSecretPathParams {
	queryParams: ActionsListSelectedReposForOrgSecretQueryParams;
}

export function useActionsListSelectedReposForOrgSecretQuery(
	props: UseActionsListSelectedReposForOrgSecretQueryProps,
) {
	const { org, secret_name, queryParams } = props;

	return useQuery(['actions/list-selected-repos-for-org-secret', org, secret_name, queryParams]);
}
