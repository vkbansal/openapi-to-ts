/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ProjectsGetPermissionForUserPathParams {
	project_id: number;
	username: string;
}

export interface ProjectsGetPermissionForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsGetPermissionForUserPathParams {}

/**
 * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
 */
export async function projectsGetPermissionForUser(props: ProjectsGetPermissionForUserProps) {
	const { project_id, username, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/collaborators/${username}/permission`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
