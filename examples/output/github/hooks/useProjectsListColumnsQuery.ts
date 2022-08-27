import { useQuery } from '@tanstack/react-query';

export interface ProjectsListColumnsPathParams {
	project_id: number;
}

export interface ProjectsListColumnsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseProjectsListColumnsQueryProps extends ProjectsListColumnsPathParams {
	queryParams: ProjectsListColumnsQueryParams;
}

export function useProjectsListColumnsQuery(props: UseProjectsListColumnsQueryProps) {
	const { project_id, queryParams } = props;

	return useQuery(['projects/list-columns', project_id, queryParams]);
}
