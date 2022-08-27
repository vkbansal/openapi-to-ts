/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ProjectsListColumnsPathParams {
	project_id: number;
}

export interface ProjectsListColumnsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseProjectsListColumnsQueryProps extends ProjectsListColumnsPathParams {
	queryParams: ProjectsListColumnsQueryParams;
}

export function useProjectsListColumnsQuery(props: UseProjectsListColumnsQueryProps) {
	const { project_id, queryParams } = props;

	return useQuery(['projects/list-columns', project_id, queryParams]);
}