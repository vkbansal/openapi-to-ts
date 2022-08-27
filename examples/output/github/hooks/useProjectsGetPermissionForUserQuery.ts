import { useQuery } from '@tanstack/react-query';

export interface ProjectsGetPermissionForUserPathParams {
	project_id: number;
	username: string;
}

export interface UseProjectsGetPermissionForUserQueryProps
	extends ProjectsGetPermissionForUserPathParams {}

export function useProjectsGetPermissionForUserQuery(
	props: UseProjectsGetPermissionForUserQueryProps,
) {
	const { project_id, username } = props;

	return useQuery(['projects/get-permission-for-user', project_id, username]);
}
