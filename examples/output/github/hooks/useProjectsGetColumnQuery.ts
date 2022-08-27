import { useQuery } from '@tanstack/react-query';

export interface ProjectsGetColumnPathParams {
	column_id: number;
}

export interface UseProjectsGetColumnQueryProps extends ProjectsGetColumnPathParams {}

export function useProjectsGetColumnQuery(props: UseProjectsGetColumnQueryProps) {
	const { column_id } = props;

	return useQuery(['projects/get-column', column_id]);
}
