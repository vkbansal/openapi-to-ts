/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ReposListDeploymentStatusesPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
}

export interface ReposListDeploymentStatusesQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseReposListDeploymentStatusesQueryProps
	extends ReposListDeploymentStatusesPathParams {
	queryParams: ReposListDeploymentStatusesQueryParams;
}

export function useReposListDeploymentStatusesQuery(
	props: UseReposListDeploymentStatusesQueryProps,
) {
	const { owner, repo, deployment_id, queryParams } = props;

	return useQuery(['repos/list-deployment-statuses', owner, repo, deployment_id, queryParams]);
}