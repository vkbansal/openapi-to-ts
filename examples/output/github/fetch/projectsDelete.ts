export interface ProjectsDeletePathParams {
	project_id: number;
}

export interface ProjectsDeleteProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsDeletePathParams {}

export async function projectsDelete(props: ProjectsDeleteProps) {
	const { project_id, ...rest } = props;

	const response = await fetch(`/projects/${project_id}`, {
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
