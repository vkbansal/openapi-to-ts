import { useQuery } from '@tanstack/react-query';

export interface ReposGetPagesBuildPathParams {
	owner: string;
	repo: string;
	build_id: number;
}

export interface UseReposGetPagesBuildQueryProps extends ReposGetPagesBuildPathParams {}

export function useReposGetPagesBuildQuery(props: UseReposGetPagesBuildQueryProps) {
	const { owner, repo, build_id } = props;

	return useQuery(['repos/get-pages-build', owner, repo, build_id]);
}
