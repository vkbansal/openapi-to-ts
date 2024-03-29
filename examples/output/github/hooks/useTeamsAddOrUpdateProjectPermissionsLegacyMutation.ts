/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseTeamsAddOrUpdateProjectPermissionsLegacyMutationPathParams {
	team_id: number;
	project_id: number;
}

export interface UseTeamsAddOrUpdateProjectPermissionsLegacyMutationRequestBody {
	/**
	 * The permission to grant to the team for this project. Can be one of:
	 * \* `read` - team members can read, but not write to or administer this project.
	 * \* `write` - team members can read and write, but not administer this project.
	 * \* `admin` - team members can read, write and administer this project.
	 * Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
	 */
	permission?: 'admin' | 'read' | 'write';
}

export interface UseTeamsAddOrUpdateProjectPermissionsLegacyMutationProps
	extends UseTeamsAddOrUpdateProjectPermissionsLegacyMutationPathParams {
	body: UseTeamsAddOrUpdateProjectPermissionsLegacyMutationRequestBody;
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
 *
 * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
 * @deprecated
 */

export function useTeamsAddOrUpdateProjectPermissionsLegacyMutation(
	props: UseTeamsAddOrUpdateProjectPermissionsLegacyMutationProps,
) {
	return useMutation(() => Promise.resolve());
}
