/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface ProjectsListForOrgPathParams {
	org: string;
}

export interface ProjectsListForOrgQueryParams {
	state?: 'all' | 'closed' | 'open';
	per_page?: number;
	page?: number;
}

export interface UseProjectsListForOrgQueryProps extends ProjectsListForOrgPathParams {
	queryParams: ProjectsListForOrgQueryParams;
}

export function useProjectsListForOrgQuery(props: UseProjectsListForOrgQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['projects/list-for-org', org, queryParams]);
}