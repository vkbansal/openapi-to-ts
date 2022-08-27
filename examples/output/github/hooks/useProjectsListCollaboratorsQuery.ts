import { useQuery } from '@tanstack/react-query';

export interface ProjectsListCollaboratorsPathParams {
	project_id: number;
}

export interface ProjectsListCollaboratorsQueryParams {
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
	extends ProjectsListCollaboratorsPathParams {
	queryParams: ProjectsListCollaboratorsQueryParams;
}

export function useProjectsListCollaboratorsQuery(props: UseProjectsListCollaboratorsQueryProps) {
	const { project_id, queryParams } = props;

	return useQuery(['projects/list-collaborators', project_id, queryParams]);
}
