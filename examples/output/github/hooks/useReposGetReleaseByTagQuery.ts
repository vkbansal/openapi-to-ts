import { useQuery } from '@tanstack/react-query';

export interface ReposGetReleaseByTagPathParams {
	owner: string;
	repo: string;
	tag: string;
}

export interface UseReposGetReleaseByTagQueryProps extends ReposGetReleaseByTagPathParams {}

export function useReposGetReleaseByTagQuery(props: UseReposGetReleaseByTagQueryProps) {
	const { owner, repo, tag } = props;

	return useQuery(['repos/get-release-by-tag', owner, repo, tag]);
}
