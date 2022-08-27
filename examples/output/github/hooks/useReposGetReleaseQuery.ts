import { useQuery } from '@tanstack/react-query';

export interface ReposGetReleasePathParams {
	owner: string;
	repo: string;
	release_id: number;
}

export interface UseReposGetReleaseQueryProps extends ReposGetReleasePathParams {}

export function useReposGetReleaseQuery(props: UseReposGetReleaseQueryProps) {
	const { owner, repo, release_id } = props;

	return useQuery(['repos/get-release', owner, repo, release_id]);
}
