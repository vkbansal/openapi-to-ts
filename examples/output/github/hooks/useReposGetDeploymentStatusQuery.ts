/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface ReposGetDeploymentStatusPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
	status_id: number;
}

export interface UseReposGetDeploymentStatusQueryProps extends ReposGetDeploymentStatusPathParams {}

/**
 * Users with pull access can view a deployment status for a deployment:
 */

export function useReposGetDeploymentStatusQuery(props: UseReposGetDeploymentStatusQueryProps) {
	const { owner, repo, deployment_id, status_id } = props;

	return useQuery(['repos/get-deployment-status', owner, repo, deployment_id, status_id]);
}
