import { useQuery } from '@tanstack/react-query';

export interface ReposGetDeploymentPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
}

export interface UseReposGetDeploymentQueryProps extends ReposGetDeploymentPathParams {}

export function useReposGetDeploymentQuery(props: UseReposGetDeploymentQueryProps) {
	const { owner, repo, deployment_id } = props;

	return useQuery(['repos/get-deployment', owner, repo, deployment_id]);
}
