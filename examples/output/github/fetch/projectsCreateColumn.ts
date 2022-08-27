export interface ProjectsCreateColumnPathParams {
	project_id: number;
}

export interface ProjectsCreateColumnRequestBody {
	/**
	 * Name of the project column
	 * @example "Remaining tasks"
	 */
	name: string;
}

export interface ProjectsCreateColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsCreateColumnPathParams {
	body: ProjectsCreateColumnRequestBody;
}

export async function projectsCreateColumn(props: ProjectsCreateColumnProps) {
	const { project_id, body, ...rest } = props;

	const response = await fetch(`/projects/${project_id}/columns`, {
		method: 'POST',
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
