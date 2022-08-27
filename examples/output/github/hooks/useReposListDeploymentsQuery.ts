import { useQuery } from '@tanstack/react-query';

export interface ReposListDeploymentsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListDeploymentsQueryParams {
	/**
	 * @default "none"
	 */
	sha?: string;
	/**
	 * @default "none"
	 */
	ref?: string;
	/**
	 * @default "none"
	 */
	task?: string;
	/**
	 * @default "none"
	 */
	environment?: string | null;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListDeploymentsQueryProps extends ReposListDeploymentsPathParams {
	queryParams: ReposListDeploymentsQueryParams;
}

export function useReposListDeploymentsQuery(props: UseReposListDeploymentsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-deployments', owner, repo, queryParams]);
}
