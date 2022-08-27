import { useQuery } from '@tanstack/react-query';

export interface ReposListCollaboratorsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListCollaboratorsQueryParams {
	/**
	 * @default "all"
	 */
	affiliation?: 'all' | 'direct' | 'outside';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListCollaboratorsQueryProps extends ReposListCollaboratorsPathParams {
	queryParams: ReposListCollaboratorsQueryParams;
}

export function useReposListCollaboratorsQuery(props: UseReposListCollaboratorsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-collaborators', owner, repo, queryParams]);
}
