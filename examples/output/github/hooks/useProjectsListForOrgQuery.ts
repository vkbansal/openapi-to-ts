import { useQuery } from '@tanstack/react-query';

export interface ProjectsListForOrgPathParams {
	org: string;
}

export interface ProjectsListForOrgQueryParams {
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

export interface UseProjectsListForOrgQueryProps extends ProjectsListForOrgPathParams {
	queryParams: ProjectsListForOrgQueryParams;
}

export function useProjectsListForOrgQuery(props: UseProjectsListForOrgQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['projects/list-for-org', org, queryParams]);
}
