/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseProjectsListCollaboratorsQueryPathParams {
	project_id: number;
}

export interface UseProjectsListCollaboratorsQueryQueryParams {
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

export interface UseProjectsListCollaboratorsQueryProps
	extends UseProjectsListCollaboratorsQueryPathParams {
	queryParams: UseProjectsListCollaboratorsQueryQueryParams;
}

/**
 * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
 */

export function useProjectsListCollaboratorsQuery(props: UseProjectsListCollaboratorsQueryProps) {
	const { project_id, queryParams } = props;

	return useQuery(['projects/list-collaborators', project_id, queryParams]);
}
