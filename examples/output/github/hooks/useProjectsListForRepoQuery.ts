import { useQuery } from '@tanstack/react-query';

export interface ProjectsListForRepoPathParams {
	owner: string;
	repo: string;
}

export interface ProjectsListForRepoQueryParams {
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseProjectsListForRepoQueryProps extends ProjectsListForRepoPathParams {
	queryParams: ProjectsListForRepoQueryParams;
}

export function useProjectsListForRepoQuery(props: UseProjectsListForRepoQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['projects/list-for-repo', owner, repo, queryParams]);
}
