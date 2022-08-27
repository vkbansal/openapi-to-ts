export interface ProjectsUpdateColumnPathParams {
	column_id: number;
}

export interface ProjectsUpdateColumnRequestBody {
	/**
	 * Name of the project column
	 * @example "Remaining tasks"
	 */
	name: string;
}

export interface ProjectsUpdateColumnProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ProjectsUpdateColumnPathParams {
	body: ProjectsUpdateColumnRequestBody;
}

export async function projectsUpdateColumn(props: ProjectsUpdateColumnProps) {
	const { column_id, body, ...rest } = props;

	const response = await fetch(`/projects/columns/${column_id}`, {
		method: 'PATCH',
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
