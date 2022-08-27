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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
