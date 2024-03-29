/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseProjectsGetPermissionForUserQueryPathParams {
	project_id: number;
	username: string;
}

export interface UseProjectsGetPermissionForUserQueryProps
	extends UseProjectsGetPermissionForUserQueryPathParams {}

/**
 * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
 */

export function useProjectsGetPermissionForUserQuery(
	props: UseProjectsGetPermissionForUserQueryProps,
) {
	const { project_id, username } = props;

	return useQuery(['projects/get-permission-for-user', project_id, username]);
}
