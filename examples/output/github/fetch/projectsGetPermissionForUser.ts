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

export async function projectsGetPermissionForUser(props: ProjectsGetPermissionForUserProps) {
	const { project_id, username, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/collaborators/${username}/permission`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}