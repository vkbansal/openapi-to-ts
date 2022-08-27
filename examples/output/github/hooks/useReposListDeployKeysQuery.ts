import { useQuery } from '@tanstack/react-query';

export interface ReposListDeployKeysPathParams {
	owner: string;
	repo: string;
}

export interface ReposListDeployKeysQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListDeployKeysQueryProps extends ReposListDeployKeysPathParams {
	queryParams: ReposListDeployKeysQueryParams;
}

export function useReposListDeployKeysQuery(props: UseReposListDeployKeysQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-deploy-keys', owner, repo, queryParams]);
}
