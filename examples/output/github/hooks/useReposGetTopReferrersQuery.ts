import { useQuery } from '@tanstack/react-query';

export interface ReposGetTopReferrersPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetTopReferrersQueryProps extends ReposGetTopReferrersPathParams {}

export function useReposGetTopReferrersQuery(props: UseReposGetTopReferrersQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-top-referrers', owner, repo]);
}
