import { useQuery } from '@tanstack/react-query';

export interface ActionsListRepoSecretsPathParams {
	owner: string;
	repo: string;
}

export interface ActionsListRepoSecretsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseActionsListRepoSecretsQueryProps extends ActionsListRepoSecretsPathParams {
	queryParams: ActionsListRepoSecretsQueryParams;
}

export function useActionsListRepoSecretsQuery(props: UseActionsListRepoSecretsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['actions/list-repo-secrets', owner, repo, queryParams]);
}
