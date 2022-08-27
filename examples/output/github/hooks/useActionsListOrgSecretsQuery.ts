import { useQuery } from '@tanstack/react-query';

export interface ActionsListOrgSecretsPathParams {
	org: string;
}

export interface ActionsListOrgSecretsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListOrgSecretsQueryProps extends ActionsListOrgSecretsPathParams {
	queryParams: ActionsListOrgSecretsQueryParams;
}

export function useActionsListOrgSecretsQuery(props: UseActionsListOrgSecretsQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['actions/list-org-secrets', org, queryParams]);
}
