import { useQuery } from '@tanstack/react-query';

export interface ReposListTeamsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListTeamsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListTeamsQueryProps extends ReposListTeamsPathParams {
	queryParams: ReposListTeamsQueryParams;
}

export function useReposListTeamsQuery(props: UseReposListTeamsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-teams', owner, repo, queryParams]);
}
