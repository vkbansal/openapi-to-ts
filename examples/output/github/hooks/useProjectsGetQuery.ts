import { useQuery } from '@tanstack/react-query';

export interface ProjectsGetPathParams {
	project_id: number;
}

export interface UseProjectsGetQueryProps extends ProjectsGetPathParams {}

export function useProjectsGetQuery(props: UseProjectsGetQueryProps) {
	const { project_id } = props;

	return useQuery(['projects/get', project_id]);
}
