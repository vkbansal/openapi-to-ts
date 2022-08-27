import { useQuery } from '@tanstack/react-query';

export interface ReposGetDeployKeyPathParams {
	owner: string;
	repo: string;
	key_id: number;
}

export interface UseReposGetDeployKeyQueryProps extends ReposGetDeployKeyPathParams {}

export function useReposGetDeployKeyQuery(props: UseReposGetDeployKeyQueryProps) {
	const { owner, repo, key_id } = props;

	return useQuery(['repos/get-deploy-key', owner, repo, key_id]);
}
