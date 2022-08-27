import { useQuery } from '@tanstack/react-query';

export interface ReposGetEnvironmentPathParams {
	owner: string;
	repo: string;
	environment_name: string;
}

export interface UseReposGetEnvironmentQueryProps extends ReposGetEnvironmentPathParams {}

export function useReposGetEnvironmentQuery(props: UseReposGetEnvironmentQueryProps) {
	const { owner, repo, environment_name } = props;

	return useQuery(['repos/get-environment', owner, repo, environment_name]);
}
