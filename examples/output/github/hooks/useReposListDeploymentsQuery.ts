/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListDeploymentsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListDeploymentsQueryParams {
	sha?: string;
	ref?: string;
	task?: string;
	environment?: string | null;
	per_page?: number;
	page?: number;
}

export interface UseReposListDeploymentsQueryProps extends ReposListDeploymentsPathParams {
	queryParams: ReposListDeploymentsQueryParams;
}

export function useReposListDeploymentsQuery(props: UseReposListDeploymentsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-deployments', owner, repo, queryParams]);
}