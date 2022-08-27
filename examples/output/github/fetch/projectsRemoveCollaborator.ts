export interface ProjectsRemoveCollaboratorPathParams {
	project_id: number;
	username: string;
}

export interface ProjectsRemoveCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsRemoveCollaboratorPathParams {}

export async function projectsRemoveCollaborator(props: ProjectsRemoveCollaboratorProps) {
	const { project_id, username, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/collaborators/${username}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
