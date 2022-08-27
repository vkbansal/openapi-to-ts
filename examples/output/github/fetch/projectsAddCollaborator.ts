/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ProjectsAddCollaboratorPathParams {
	project_id: number;
	username: string;
}

export interface ProjectsAddCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsAddCollaboratorPathParams {}

export async function projectsAddCollaborator(props: ProjectsAddCollaboratorProps) {
	const { project_id, username, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/collaborators/${username}`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}