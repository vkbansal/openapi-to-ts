export interface ProjectsGetPathParams {
	project_id: number;
}

export interface ProjectsGetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsGetPathParams {}

export async function projectsGet(props: ProjectsGetProps) {
	const { project_id, ...rest } = props;

	const response = await fetch(`/projects/${project_id}`, {
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
