export interface ProjectsAddCollaboratorPathParams {
	project_id: number;
	username: string;
}

export interface ProjectsAddCollaboratorRequestBody {
	/**
	 * The permission to grant the collaborator.
	 * @default "write"
	 * @example "write"
	 */
	permission?: 'admin' | 'read' | 'write';
}

export interface ProjectsAddCollaboratorProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsAddCollaboratorPathParams {
	body: ProjectsAddCollaboratorRequestBody;
}

export async function projectsAddCollaborator(props: ProjectsAddCollaboratorProps) {
	const { project_id, username, body, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/collaborators/${username}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
