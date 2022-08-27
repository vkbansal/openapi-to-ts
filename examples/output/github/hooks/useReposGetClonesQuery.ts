import { useQuery } from '@tanstack/react-query';

export interface ReposGetClonesPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetClonesQueryParams {
	/**
	 * @default "day"
	 */
	per?: '' | 'day' | 'week';
}

export interface UseReposGetClonesQueryProps extends ReposGetClonesPathParams {
	queryParams: ReposGetClonesQueryParams;
}

export function useReposGetClonesQuery(props: UseReposGetClonesQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/get-clones', owner, repo, queryParams]);
}
